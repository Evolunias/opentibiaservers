import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-players-online');
}

export default function Tibia13WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-players-online" />;
}
