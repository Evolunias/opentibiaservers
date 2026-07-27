import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-players-online');
}

export default function Tibia11SeasonalPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-players-online" />;
}
