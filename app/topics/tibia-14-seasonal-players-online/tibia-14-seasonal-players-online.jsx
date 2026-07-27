import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-players-online');
}

export default function Tibia14SeasonalPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-players-online" />;
}
