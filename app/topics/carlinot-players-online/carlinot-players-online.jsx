import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-players-online');
}

export default function CarlinotPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="carlinot-players-online" />;
}
