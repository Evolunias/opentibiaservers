import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-players-online');
}

export default function KasteriaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="kasteria-players-online" />;
}
