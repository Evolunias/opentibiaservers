'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const getWorldTypeColor = (type) => {
  switch(type) {
    case 'PVP': return 'bg-red-900 text-red-100';
    case 'Non-PVP': return 'bg-green-900 text-green-100';
    case 'PVP-Enforced': return 'bg-amber-900 text-amber-100';
    default: return 'bg-gray-900 text-gray-100';
  }
};

export default function ServerDetail({ params }) {
  const [server, setServer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadServer();
  }, [params.id]);

  const loadServer = async () => {
    try {
      const { data, error: fetchError } = await supabase
        .from('servers')
        .select('*')
        .eq('id', params.id)
        .single();

      if (fetchError) {
        setError('Server not found');
      } else {
        setServer(data);
      }
    } catch (err) {
      setError('Failed to load server details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">
            ← Back to Servers
          </Link>
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-slate-700 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Loading server...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !server) {
    return (
      <main className="min-h-screen bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">
            ← Back to Servers
          </Link>
          <div className="bg-red-900 border border-red-700 text-red-100 px-6 py-4 rounded">
            {error}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">
          ← Back to Servers
        </Link>

        <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-8 border-b border-blue-700">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{server.name}</h1>
                <p className="text-blue-100 text-lg">{server.ip}:{server.port}</p>
              </div>
              <div className={`px-4 py-2 rounded-lg font-semibold ${getWorldTypeColor(server.world_type)}`}>
                {server.world_type}
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700 rounded-lg p-6">
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Players Online</p>
                <p className="text-3xl font-bold text-cyan-400">{server.players_online || 0}</p>
              </div>
              <div className="bg-slate-700 rounded-lg p-6">
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Peak Players</p>
                <p className="text-3xl font-bold text-amber-400">{server.players_peak || 0}</p>
              </div>
              <div className="bg-slate-700 rounded-lg p-6">
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Uptime</p>
                <p className="text-3xl font-bold text-green-400">{server.uptime_percent || 0}%</p>
              </div>
              <div className="bg-slate-700 rounded-lg p-6">
                <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Status</p>
                <p className={`text-xl font-bold ${server.is_online ? 'text-green-400' : 'text-red-400'}`}>
                  {server.is_online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>

            {/* Rates Section */}
            <div className="bg-slate-700 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Experience Rates</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Experience</p>
                  <p className="text-2xl font-bold text-white">{server.exp_rate || 1}x</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Skill</p>
                  <p className="text-2xl font-bold text-white">{server.skill_rate || 1}x</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Magic</p>
                  <p className="text-2xl font-bold text-white">{server.magic_rate || 1}x</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Loot</p>
                  <p className="text-2xl font-bold text-white">{server.loot_rate || 1}x</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Spawn</p>
                  <p className="text-2xl font-bold text-white">{server.spawn_rate || 1}x</p>
                </div>
              </div>
              {server.exp_stages && (
                <div className="mt-4 px-3 py-2 bg-blue-900 text-blue-100 rounded text-sm">
                  ✓ Experience Stages Enabled
                </div>
              )}
            </div>

            {/* Server Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Server Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Version:</span>
                    <span className="text-white font-semibold">{server.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Client Type:</span>
                    <span className="text-white font-semibold">{server.client_type || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">World Type:</span>
                    <span className="text-white font-semibold">{server.world_type}</span>
                  </div>
                  {server.pvp_type && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">PVP Type:</span>
                      <span className="text-white font-semibold">{server.pvp_type}</span>
                    </div>
                  )}
                  {server.map_name && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Map:</span>
                      <span className="text-white font-semibold">{server.map_name}</span>
                    </div>
                  )}
                  {server.server_type && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Server Type:</span>
                      <span className="text-white font-semibold">{server.server_type}</span>
                    </div>
                  )}
                  {server.location && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white font-semibold">{server.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Features</h3>
                <div className="space-y-2">
                  {server.has_custom_map && (
                    <div className="flex items-center gap-2 text-green-400">
                      <span>✓</span> Custom Map
                    </div>
                  )}
                  {server.has_custom_sprites && (
                    <div className="flex items-center gap-2 text-green-400">
                      <span>✓</span> Custom Sprites
                    </div>
                  )}
                  {server.has_store && (
                    <div className="flex items-center gap-2 text-green-400">
                      <span>✓</span> In-Game Store
                    </div>
                  )}
                  {server.is_premium_required && (
                    <div className="flex items-center gap-2 text-amber-400">
                      <span>!</span> Premium Required
                    </div>
                  )}
                  {server.has_battleye && (
                    <div className="flex items-center gap-2 text-blue-400">
                      <span>✓</span> BattlEye Anti-Cheat
                    </div>
                  )}
                  {!server.has_custom_map && !server.has_custom_sprites && !server.has_store && !server.is_premium_required && !server.has_battleye && (
                    <p className="text-gray-400">Standard server setup</p>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            {server.description && (
              <div className="bg-slate-700 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Description</h3>
                <p className="text-gray-300 leading-relaxed">{server.description}</p>
              </div>
            )}

            {/* Tags */}
            {server.tags && server.tags.length > 0 && (
              <div className="bg-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {server.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-cyan-900 text-cyan-100 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Info */}
            {(server.website_url || server.owner_email) && (
              <div className="mt-8 pt-8 border-t border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4">Contact & Links</h3>
                <div className="space-y-2 text-sm">
                  {server.website_url && (
                    <p>
                      <span className="text-gray-400">Website: </span>
                      <a href={server.website_url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                        {server.website_url}
                      </a>
                    </p>
                  )}
                  {server.owner_email && (
                    <p>
                      <span className="text-gray-400">Contact: </span>
                      <a href={`mailto:${server.owner_email}`} className="text-cyan-400 hover:text-cyan-300">
                        {server.owner_email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
