import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-players-online');
}

export default function Tibia80SeasonalPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-players-online" />;
}
