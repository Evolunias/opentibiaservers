import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-active-players-players-online');
}

export default function Tibia74WithActivePlayersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-active-players-players-online" />;
}
