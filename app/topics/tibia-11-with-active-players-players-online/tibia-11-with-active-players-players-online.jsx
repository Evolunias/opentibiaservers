import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-players-online');
}

export default function Tibia11WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-players-online" />;
}
