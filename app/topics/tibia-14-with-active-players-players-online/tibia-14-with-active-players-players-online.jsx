import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-players-online');
}

export default function Tibia14WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-players-online" />;
}
