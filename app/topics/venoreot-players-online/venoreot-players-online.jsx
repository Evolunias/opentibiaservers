import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-players-online');
}

export default function VenoreotPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="venoreot-players-online" />;
}
