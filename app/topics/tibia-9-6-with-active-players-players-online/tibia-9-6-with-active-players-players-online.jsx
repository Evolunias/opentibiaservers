import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-active-players-players-online');
}

export default function Tibia96WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-active-players-players-online" />;
}
