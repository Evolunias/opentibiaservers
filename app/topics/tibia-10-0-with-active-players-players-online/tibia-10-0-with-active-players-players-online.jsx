import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-active-players-players-online');
}

export default function Tibia100WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-active-players-players-online" />;
}
