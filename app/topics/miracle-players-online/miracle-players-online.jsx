import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-players-online');
}

export default function MiraclePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="miracle-players-online" />;
}
