import Link from 'next/link';
import { getServerPath } from '@/lib/server-paths';

function number(value) {
  if (value === null || value === undefined) return '-';
  return Number(value).toLocaleString();
}

export default function SeoServerIndex({ title, description, servers = [] }) {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-gray-950">
            Open Tibia Servers
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mt-3 mb-3">{title}</h1>
          <p className="text-base text-gray-600 max-w-3xl">{description}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-900">Server</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-900">Players</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-900">Client</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-900">EXP</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-900">Location</th>
              </tr>
            </thead>
            <tbody>
              {servers.map((server) => (
                <tr key={server.id || server.ip} className="border-b border-gray-100">
                  <td className="px-4 py-3">
                    <Link href={getServerPath(server)} className="font-semibold text-gray-950 hover:underline">
                      {server.name}
                    </Link>
                    <div className="text-xs text-gray-600">{server.host || server.ip}:{server.port || 7171}</div>
                  </td>
                  <td className="px-4 py-3 text-center font-bold text-green-700">{number(server.players_online || 0)}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{server.version || '-'}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{server.exp_rate ? `${server.exp_rate}x` : '-'}</td>
                  <td className="px-4 py-3 text-gray-700">{server.location || server.world_type || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
