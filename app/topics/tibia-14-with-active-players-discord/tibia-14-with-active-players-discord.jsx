import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-discord');
}

export default function Tibia14WithActivePlayersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-discord" />;
}
