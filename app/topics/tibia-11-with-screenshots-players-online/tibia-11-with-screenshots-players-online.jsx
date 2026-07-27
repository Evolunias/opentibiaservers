import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-players-online');
}

export default function Tibia11WithScreenshotsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-players-online" />;
}
