import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-screenshots-players-online');
}

export default function Tibia1098WithScreenshotsPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-screenshots-players-online" />;
}
