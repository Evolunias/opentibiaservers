import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-players-online');
}

export default function Tibia13WithScreenshotsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-players-online" />;
}
