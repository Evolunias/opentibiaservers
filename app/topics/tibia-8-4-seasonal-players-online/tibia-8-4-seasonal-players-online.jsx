import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-seasonal-players-online');
}

export default function Tibia84SeasonalPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-seasonal-players-online" />;
}
