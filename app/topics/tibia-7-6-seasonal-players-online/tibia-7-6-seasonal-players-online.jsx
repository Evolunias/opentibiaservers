import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-seasonal-players-online');
}

export default function Tibia76SeasonalPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-seasonal-players-online" />;
}
