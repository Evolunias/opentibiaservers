import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-players-online');
}

export default function Tibia12WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-players-online" />;
}
