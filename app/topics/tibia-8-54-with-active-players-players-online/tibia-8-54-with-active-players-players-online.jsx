import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-active-players-players-online');
}

export default function Tibia854WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-active-players-players-online" />;
}
