'use client';

import Link from 'next/link';

const getStatusColor = (isOnline) => isOnline ? 'bg-green-500' : 'bg-red-500';
const getStatusText = (isOnline) => isOnline ? 'Online' : 'Offline';

const getWorldTypeColor = (type) => {
  switch(type) {
    case 'PVP': return 'bg-red-900 text-red-100';
    case 'Non-PVP': return 'bg-green-900 text-green-100';
    case 'PVP-Enforced': return 'bg-amber-900 text-amber-100';
    default: return 'bg-gray-900 text-gray-100';
  }
};

export default function ServerCard({ server }) {
  return (
    <Link href={`/server/${server.id}`}>
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">{server.name}</h3>
            <p className="text-sm text-gray-400">{server.ip}:{server.port}</p>
          </div>
          <div className={`${getStatusColor(server.is_online)} w-3 h-3 rounded-full`} title={getStatusText(server.is_online)}></div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-xs px-2 py-1 rounded ${getWorldTypeColor(server.world_type)}`}>
            {server.world_type}
          </span>
          {server.pvp_type && (
            <span className="text-xs px-2 py-1 rounded bg-purple-900 text-purple-100">
              {server.pvp_type}
            </span>
          )}
          {server.location && (
            <span className="text-xs px-2 py-1 rounded bg-blue-900 text-blue-100">
              {server.location}
            </span>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="bg-slate-900 rounded p-3">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Players Online</p>
            <p className="text-xl font-bold text-cyan-400">{server.players_online || 0}</p>
          </div>
          <div className="bg-slate-900 rounded p-3">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Peak</p>
            <p className="text-xl font-bold text-amber-400">{server.players_peak || 0}</p>
          </div>
          <div className="bg-slate-900 rounded p-3">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Version</p>
            <p className="text-lg font-semibold text-white">{server.version}</p>
          </div>
          <div className="bg-slate-900 rounded p-3">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Uptime</p>
            <p className="text-lg font-semibold text-green-400">{server.uptime_percent || 0}%</p>
          </div>
        </div>

        {/* Rates */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
          <div>
            <p className="text-gray-400 uppercase tracking-wide mb-1">Exp</p>
            <p className="font-semibold text-white">{server.exp_rate || 1}x</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase tracking-wide mb-1">Skill</p>
            <p className="font-semibold text-white">{server.skill_rate || 1}x</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase tracking-wide mb-1">Loot</p>
            <p className="font-semibold text-white">{server.loot_rate || 1}x</p>
          </div>
        </div>

        {/* Features */}
        {(server.has_custom_map || server.has_store || server.has_battleye) && (
          <div className="flex flex-wrap gap-2 text-xs">
            {server.has_custom_map && (
              <span className="px-2 py-1 bg-indigo-900 text-indigo-100 rounded">Custom Map</span>
            )}
            {server.has_store && (
              <span className="px-2 py-1 bg-green-900 text-green-100 rounded">Store</span>
            )}
            {server.has_battleye && (
              <span className="px-2 py-1 bg-blue-900 text-blue-100 rounded">BattlEye</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
