import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-players-online');
}

export default function TibiamePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiame-players-online" />;
}
