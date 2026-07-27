import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-players-online');
}

export default function OlderaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="oldera-players-online" />;
}
