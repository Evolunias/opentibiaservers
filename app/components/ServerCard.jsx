'use client';

import Link from 'next/link';

const getStatusColor = (isOnline) => isOnline ? 'bg-green-600' : 'bg-red-600';
const getStatusText = (isOnline) => isOnline ? 'Online' : 'Offline';

const getWorldTypeColor = (type) => {
  switch(type) {
    case 'PVP': return 'bg-red-100 text-red-700';
    case 'Non-PVP': return 'bg-green-100 text-green-700';
    case 'PVP-Enforced': return 'bg-amber-100 text-amber-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export default function ServerCard({ server }) {
  return (
    <Link href={`/server/${server.id}`}>
      <div className="bg-white border border-gray-300 rounded p-4 hover:border-gray-400 hover:shadow-md cursor-pointer h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-base font-bold text-gray-900 mb-1">{server.name}</h3>
            <p className="text-xs text-gray-600">{server.ip}:{server.port}</p>
          </div>
          <div className={`${getStatusColor(server.is_online)} w-3 h-3 rounded-full flex-shrink-0`} title={getStatusText(server.is_online)}></div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs px-2 py-1 rounded font-semibold ${getWorldTypeColor(server.world_type)}`}>
            {server.world_type}
          </span>
          {server.location && (
            <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 font-semibold">
              {server.location}
            </span>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
          <div className="bg-gray-50 rounded p-2">
            <p className="text-gray-600 uppercase font-semibold mb-1 text-xs">Players</p>
            <p className="text-lg font-bold text-gray-900">{server.players_online || 0}</p>
          </div>
          <div className="bg-gray-50 rounded p-2">
            <p className="text-gray-600 uppercase font-semibold mb-1 text-xs">Peak</p>
            <p className="text-lg font-bold text-gray-900">{server.players_peak || 0}</p>
          </div>
          <div className="bg-gray-50 rounded p-2">
            <p className="text-gray-600 uppercase font-semibold mb-1 text-xs">Version</p>
            <p className="text-sm font-semibold text-gray-900">{server.version}</p>
          </div>
          <div className="bg-gray-50 rounded p-2">
            <p className="text-gray-600 uppercase font-semibold mb-1 text-xs">Uptime</p>
            <p className="text-sm font-semibold text-gray-900">{server.uptime_percent || 0}%</p>
          </div>
        </div>

        {/* Rates */}
        <div className="grid grid-cols-4 gap-1 mb-3 text-xs">
          <div className="bg-gray-50 rounded p-1.5 text-center">
            <p className="text-gray-600 font-semibold mb-1 text-xs">Exp</p>
            <p className="font-bold text-gray-900">{server.exp_rate || 1}x</p>
          </div>
          <div className="bg-gray-50 rounded p-1.5 text-center">
            <p className="text-gray-600 font-semibold mb-1 text-xs">Skill</p>
            <p className="font-bold text-gray-900">{server.skill_rate || 1}x</p>
          </div>
          <div className="bg-gray-50 rounded p-1.5 text-center">
            <p className="text-gray-600 font-semibold mb-1 text-xs">Loot</p>
            <p className="font-bold text-gray-900">{server.loot_rate || 1}x</p>
          </div>
          <div className="bg-gray-50 rounded p-1.5 text-center">
            <p className="text-gray-600 font-semibold mb-1 text-xs">Spawn</p>
            <p className="font-bold text-gray-900">{server.spawn_rate || 1}x</p>
          </div>
        </div>

        {/* Verification Badge */}
        {server.user_id && (
          <div className="flex items-center gap-1 text-xs mb-2">
            {server.verification_status === 'verified' && (
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded font-semibold text-xs">✓ Verified</span>
            )}
            {server.verification_status === 'pending' && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded font-semibold text-xs">⏳ Pending</span>
            )}
            {server.verification_status === 'failed' && (
              <span className="px-2 py-1 bg-red-100 text-red-700 rounded font-semibold text-xs">✗ Failed</span>
            )}
          </div>
        )}

        {/* Features */}
        {(server.has_custom_map || server.has_store || server.has_battleye) && (
          <div className="flex flex-wrap gap-1 text-xs">
            {server.has_custom_map && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded font-semibold text-xs">Custom Map</span>
            )}
            {server.has_store && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded font-semibold text-xs">Store</span>
            )}
            {server.has_battleye && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded font-semibold text-xs">BattlEye</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
