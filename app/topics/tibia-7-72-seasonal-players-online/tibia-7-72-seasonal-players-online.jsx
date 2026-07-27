import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-seasonal-players-online');
}

export default function Tibia772SeasonalPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-seasonal-players-online" />;
}
