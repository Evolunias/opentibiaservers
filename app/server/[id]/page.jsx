'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const getWorldTypeColor = (type) => {
  switch(type) {
    case 'PVP': return 'bg-red-100 text-red-700 border border-red-300';
    case 'Non-PVP': return 'bg-green-100 text-green-700 border border-green-300';
    case 'PVP-Enforced': return 'bg-amber-100 text-amber-700 border border-amber-300';
    default: return 'bg-gray-100 text-gray-700 border border-gray-300';
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
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-6 inline-block font-semibold">
            ← Back to Servers
          </Link>
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading server...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !server) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-6 inline-block font-semibold">
            ← Back to Servers
          </Link>
          <div className="bg-red-50 border-2 border-red-300 text-red-800 px-6 py-4 rounded-lg shadow-sm">
            {error}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/" className="text-blue-600 hover:text-blue-700 mb-6 inline-block font-semibold">
          ← Back to Servers
        </Link>

        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-md">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-8 py-8 border-b-2 border-gray-300">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2" style={{
                  animation: 'gradient-shift 6s ease infinite',
                  backgroundSize: '200% 200%'
                }}>{server.name}</h1>
                <p className="text-gray-700 text-lg">{server.ip}:{server.port}</p>
              </div>
              <div className={`px-4 py-2 rounded-lg font-semibold ${getWorldTypeColor(server.world_type)}`}>
                {server.world_type}
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200 shadow-sm">
                <p className="text-blue-600 text-sm uppercase tracking-wide font-bold mb-2">Players Online</p>
                <p className="text-3xl font-bold text-blue-700">{server.players_online || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200 shadow-sm">
                <p className="text-amber-600 text-sm uppercase tracking-wide font-bold mb-2">Peak Players</p>
                <p className="text-3xl font-bold text-amber-700">{server.players_peak || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200 shadow-sm">
                <p className="text-green-600 text-sm uppercase tracking-wide font-bold mb-2">Uptime</p>
                <p className="text-3xl font-bold text-green-700">{server.uptime_percent || 0}%</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200 shadow-sm">
                <p className="text-purple-600 text-sm uppercase tracking-wide font-bold mb-2">Status</p>
                <p className={`text-xl font-bold ${server.is_online ? 'text-green-600' : 'text-red-600'}`}>
                  {server.is_online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>

            {/* Rates Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-lg p-6 mb-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Experience Rates</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide font-bold mb-2">Experience</p>
                  <p className="text-2xl font-bold text-gray-900">{server.exp_rate || 1}x</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide font-bold mb-2">Skill</p>
                  <p className="text-2xl font-bold text-gray-900">{server.skill_rate || 1}x</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide font-bold mb-2">Magic</p>
                  <p className="text-2xl font-bold text-gray-900">{server.magic_rate || 1}x</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide font-bold mb-2">Loot</p>
                  <p className="text-2xl font-bold text-gray-900">{server.loot_rate || 1}x</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm uppercase tracking-wide font-bold mb-2">Spawn</p>
                  <p className="text-2xl font-bold text-gray-900">{server.spawn_rate || 1}x</p>
                </div>
              </div>
              {server.exp_stages && (
                <div className="mt-4 px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm border border-blue-300 font-semibold">
                  ✓ Experience Stages Enabled
                </div>
              )}
            </div>

            {/* Server Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Server Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Version:</span>
                    <span className="text-gray-900 font-semibold">{server.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Client Type:</span>
                    <span className="text-gray-900 font-semibold">{server.client_type || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">World Type:</span>
                    <span className="text-gray-900 font-semibold">{server.world_type}</span>
                  </div>
                  {server.pvp_type && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">PVP Type:</span>
                      <span className="text-gray-900 font-semibold">{server.pvp_type}</span>
                    </div>
                  )}
                  {server.map_name && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Map:</span>
                      <span className="text-gray-900 font-semibold">{server.map_name}</span>
                    </div>
                  )}
                  {server.server_type && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Server Type:</span>
                      <span className="text-gray-900 font-semibold">{server.server_type}</span>
                    </div>
                  )}
                  {server.location && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="text-gray-900 font-semibold">{server.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Features</h3>
                <div className="space-y-2">
                  {server.has_custom_map && (
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <span>✓</span> Custom Map
                    </div>
                  )}
                  {server.has_custom_sprites && (
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <span>✓</span> Custom Sprites
                    </div>
                  )}
                  {server.has_store && (
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <span>✓</span> In-Game Store
                    </div>
                  )}
                  {server.is_premium_required && (
                    <div className="flex items-center gap-2 text-amber-600 font-semibold">
                      <span>!</span> Premium Required
                    </div>
                  )}
                  {server.has_battleye && (
                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                      <span>✓</span> BattlEye Anti-Cheat
                    </div>
                  )}
                  {!server.has_custom_map && !server.has_custom_sprites && !server.has_store && !server.is_premium_required && !server.has_battleye && (
                    <p className="text-gray-600">Standard server setup</p>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            {server.description && (
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-lg p-6 mb-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">{server.description}</p>
              </div>
            )}

            {/* Tags */}
            {server.tags && server.tags.length > 0 && (
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-300 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {server.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm border border-blue-300 font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Info */}
            {(server.website_url || server.owner_email) && (
              <div className="mt-8 pt-8 border-t-2 border-gray-300">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact & Links</h3>
                <div className="space-y-2 text-sm">
                  {server.website_url && (
                    <p>
                      <span className="text-gray-600">Website: </span>
                      <a href={server.website_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold">
                        {server.website_url}
                      </a>
                    </p>
                  )}
                  {server.owner_email && (
                    <p>
                      <span className="text-gray-600">Contact: </span>
                      <a href={`mailto:${server.owner_email}`} className="text-blue-600 hover:text-blue-700 font-semibold">
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
