import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-active-players-players-online');
}

export default function Tibia76WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-active-players-players-online" />;
}
