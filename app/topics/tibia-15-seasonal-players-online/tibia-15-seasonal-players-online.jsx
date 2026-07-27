import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-seasonal-players-online');
}

export default function Tibia15SeasonalPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-seasonal-players-online" />;
}
