import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-active-players-players-online');
}

export default function Tibia84WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-active-players-players-online" />;
}
