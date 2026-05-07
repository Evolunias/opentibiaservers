'use client';

import Link from 'next/link';

const getStatusColor = (isOnline) => isOnline ? 'bg-green-500' : 'bg-red-500';
const getStatusText = (isOnline) => isOnline ? 'Online' : 'Offline';

const getWorldTypeColor = (type) => {
  switch(type) {
    case 'PVP': return 'bg-red-100 text-red-700 border border-red-300';
    case 'Non-PVP': return 'bg-green-100 text-green-700 border border-green-300';
    case 'PVP-Enforced': return 'bg-amber-100 text-amber-700 border border-amber-300';
    default: return 'bg-gray-100 text-gray-700 border border-gray-300';
  }
};

export default function ServerCard({ server }) {
  return (
    <Link href={`/server/${server.id}`}>
      <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full transform hover:-translate-y-2" style={{
        borderImageSource: 'linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(255, 0, 110, 0.2))',
        borderRadius: '0.75rem'
      }}>
        <style>{`
          @keyframes card-float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-5px) scale(1.02); }
          }
        `}</style>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1" style={{
              animation: 'gradient-shift 6s ease infinite',
              backgroundSize: '200% 200%'
            }}>{server.name}</h3>
            <p className="text-sm text-gray-600">{server.ip}:{server.port}</p>
          </div>
          <div className={`${getStatusColor(server.is_online)} w-4 h-4 rounded-full shadow-lg`} title={getStatusText(server.is_online)} style={{
            animation: server.is_online ? 'glow-pulse 2s ease-in-out infinite' : 'none'
          }}></div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getWorldTypeColor(server.world_type)}`}>
            {server.world_type}
          </span>
          {server.pvp_type && (
            <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-300 font-semibold">
              {server.pvp_type}
            </span>
          )}
          {server.location && (
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-300 font-semibold">
              {server.location}
            </span>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200 hover:shadow-md transition-all">
            <p className="text-blue-600 text-xs uppercase tracking-wide font-bold mb-1">Players Online</p>
            <p className="text-2xl font-bold text-blue-700">{server.players_online || 0}</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-3 border border-amber-200 hover:shadow-md transition-all">
            <p className="text-amber-600 text-xs uppercase tracking-wide font-bold mb-1">Peak</p>
            <p className="text-2xl font-bold text-amber-700">{server.players_peak || 0}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200 hover:shadow-md transition-all">
            <p className="text-purple-600 text-xs uppercase tracking-wide font-bold mb-1">Version</p>
            <p className="text-lg font-semibold text-purple-700">{server.version}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border border-green-200 hover:shadow-md transition-all">
            <p className="text-green-600 text-xs uppercase tracking-wide font-bold mb-1">Uptime</p>
            <p className="text-lg font-semibold text-green-700">{server.uptime_percent || 0}%</p>
          </div>
        </div>

        {/* Rates */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="bg-red-50 rounded-lg p-2 border border-red-200">
            <p className="text-red-600 uppercase tracking-wide font-bold mb-1">Exp</p>
            <p className="font-bold text-red-700">{server.exp_rate || 1}x</p>
          </div>
          <div className="bg-pink-50 rounded-lg p-2 border border-pink-200">
            <p className="text-pink-600 uppercase tracking-wide font-bold mb-1">Skill</p>
            <p className="font-bold text-pink-700">{server.skill_rate || 1}x</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-2 border border-orange-200">
            <p className="text-orange-600 uppercase tracking-wide font-bold mb-1">Loot</p>
            <p className="font-bold text-orange-700">{server.loot_rate || 1}x</p>
          </div>
          <div className="bg-green-50 rounded-lg p-2 border border-green-200">
            <p className="text-green-600 uppercase tracking-wide font-bold mb-1">Spawn</p>
            <p className="font-bold text-green-700">{server.spawn_rate || 1}x</p>
          </div>
        </div>

        {/* Verification Badge */}
        {server.user_id && (
          <div className="flex items-center gap-1 text-xs mb-3">
            {server.verification_status === 'verified' && (
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full border border-green-300 font-semibold flex items-center gap-1">
                <span>✓</span> Verified
              </span>
            )}
            {server.verification_status === 'pending' && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full border border-yellow-300 font-semibold flex items-center gap-1">
                <span>⏳</span> Pending
              </span>
            )}
            {server.verification_status === 'failed' && (
              <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full border border-red-300 font-semibold flex items-center gap-1">
                <span>✗</span> Failed
              </span>
            )}
          </div>
        )}

        {/* Features */}
        {(server.has_custom_map || server.has_store || server.has_battleye) && (
          <div className="flex flex-wrap gap-2 text-xs">
            {server.has_custom_map && (
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full border border-indigo-300 font-semibold">Custom Map</span>
            )}
            {server.has_store && (
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full border border-green-300 font-semibold">Store</span>
            )}
            {server.has_battleye && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full border border-blue-300 font-semibold">BattlEye</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
