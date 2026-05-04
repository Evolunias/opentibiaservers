'use client';

import Link from 'next/link';

const getStatusColor = (isOnline) => isOnline ? 'text-green-400' : 'text-red-400';
const getWorldTypeColor = (type) => {
  switch(type) {
    case 'PVP': return 'text-red-400';
    case 'Non-PVP': return 'text-green-400';
    case 'PVP-Enforced': return 'text-amber-400';
    default: return 'text-gray-400';
  }
};

export default function ServerList({ servers }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-700 bg-slate-900">
            <th className="text-left px-6 py-4 font-semibold text-gray-300">Server</th>
            <th className="text-left px-6 py-4 font-semibold text-gray-300">Type</th>
            <th className="text-center px-6 py-4 font-semibold text-gray-300">Online</th>
            <th className="text-center px-6 py-4 font-semibold text-gray-300">Peak</th>
            <th className="text-center px-6 py-4 font-semibold text-gray-300">Version</th>
            <th className="text-center px-6 py-4 font-semibold text-gray-300">Exp/Skill/Loot</th>
            <th className="text-center px-6 py-4 font-semibold text-gray-300">Uptime</th>
            <th className="text-left px-6 py-4 font-semibold text-gray-300">Location</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server) => (
            <tr key={server.id} className="border-b border-slate-800 hover:bg-slate-800 transition-colors">
              <td className="px-6 py-4">
                <Link href={`/server/${server.id}`} className="hover:text-cyan-400">
                  <div className="font-semibold text-white">{server.name}</div>
                  <div className="text-xs text-gray-500">{server.ip}:{server.port}</div>
                </Link>
              </td>
              <td className="px-6 py-4">
                <div className={`font-semibold ${getWorldTypeColor(server.world_type)}`}>
                  {server.world_type}
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <span className={`font-bold ${getStatusColor(server.is_online)}`}>
                  {server.players_online || 0}
                </span>
              </td>
              <td className="px-6 py-4 text-center font-semibold text-amber-400">
                {server.players_peak || 0}
              </td>
              <td className="px-6 py-4 text-center font-semibold text-white">
                {server.version}
              </td>
              <td className="px-6 py-4 text-center text-gray-300">
                <span className="font-semibold">{server.exp_rate || 1}x</span> / 
                <span className="font-semibold ml-1">{server.skill_rate || 1}x</span> / 
                <span className="font-semibold ml-1">{server.loot_rate || 1}x</span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="font-semibold text-green-400">{server.uptime_percent || 0}%</span>
              </td>
              <td className="px-6 py-4 text-gray-300">
                {server.location || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
