import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-players-online');
}

export default function Tibia74SeasonalPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-players-online" />;
}
