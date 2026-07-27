import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-screenshots-players-online');
}

export default function Tibia15WithScreenshotsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-screenshots-players-online" />;
}
