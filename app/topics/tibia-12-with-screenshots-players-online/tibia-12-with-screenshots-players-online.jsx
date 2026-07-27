import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-players-online');
}

export default function Tibia12WithScreenshotsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-players-online" />;
}
