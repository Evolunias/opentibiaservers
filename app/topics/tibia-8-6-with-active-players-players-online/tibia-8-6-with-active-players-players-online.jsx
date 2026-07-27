import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-active-players-players-online');
}

export default function Tibia86WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-active-players-players-online" />;
}
