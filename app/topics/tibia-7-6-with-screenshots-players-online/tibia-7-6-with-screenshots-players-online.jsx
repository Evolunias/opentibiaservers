import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-screenshots-players-online');
}

export default function Tibia76WithScreenshotsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-screenshots-players-online" />;
}
