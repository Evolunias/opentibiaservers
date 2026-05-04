'use client';

import Link from 'next/link';

const getStatusColor = (isOnline) => isOnline ? 'text-green-600' : 'text-red-600';
const getWorldTypeColor = (type) => {
  switch(type) {
    case 'PVP': return 'text-red-600';
    case 'Non-PVP': return 'text-green-600';
    case 'PVP-Enforced': return 'text-amber-600';
    default: return 'text-gray-600';
  }
};

export default function ServerList({ servers }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-gray-300 bg-gradient-to-r from-blue-50 to-purple-50">
            <th className="text-left px-6 py-4 font-bold text-gray-700">Server</th>
            <th className="text-left px-6 py-4 font-bold text-gray-700">Type</th>
            <th className="text-center px-6 py-4 font-bold text-gray-700">Online</th>
            <th className="text-center px-6 py-4 font-bold text-gray-700">Peak</th>
            <th className="text-center px-6 py-4 font-bold text-gray-700">Version</th>
            <th className="text-center px-6 py-4 font-bold text-gray-700">Exp/Skill/Loot</th>
            <th className="text-center px-6 py-4 font-bold text-gray-700">Uptime</th>
            <th className="text-left px-6 py-4 font-bold text-gray-700">Location</th>
          </tr>
        </thead>
        <tbody>
          {servers.map((server) => (
            <tr key={server.id} className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
              <td className="px-6 py-4">
                <Link href={`/server/${server.id}`} className="hover:text-blue-600 transition-colors">
                  <div className="font-semibold text-gray-900">{server.name}</div>
                  <div className="text-xs text-gray-600">{server.ip}:{server.port}</div>
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
              <td className="px-6 py-4 text-center font-semibold text-amber-600">
                {server.players_peak || 0}
              </td>
              <td className="px-6 py-4 text-center font-semibold text-gray-900">
                {server.version}
              </td>
              <td className="px-6 py-4 text-center text-gray-700">
                <span className="font-semibold">{server.exp_rate || 1}x</span> /
                <span className="font-semibold ml-1">{server.skill_rate || 1}x</span> /
                <span className="font-semibold ml-1">{server.loot_rate || 1}x</span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="font-semibold text-green-600">{server.uptime_percent || 0}%</span>
              </td>
              <td className="px-6 py-4 text-gray-700">
                {server.location || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
