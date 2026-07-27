import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-players-online');
}

export default function Tibia71SeasonalPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-players-online" />;
}
