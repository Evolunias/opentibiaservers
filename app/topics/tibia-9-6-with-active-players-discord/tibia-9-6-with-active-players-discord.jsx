import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-active-players-discord');
}

export default function Tibia96WithActivePlayersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-active-players-discord" />;
}
