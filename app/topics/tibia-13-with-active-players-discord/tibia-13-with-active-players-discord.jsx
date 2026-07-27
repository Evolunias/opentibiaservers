import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-discord');
}

export default function Tibia13WithActivePlayersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-discord" />;
}
