import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-players-online');
}

export default function ElderaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="eldera-players-online" />;
}
