import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-players-online');
}

export default function Tibia15WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-players-online" />;
}
