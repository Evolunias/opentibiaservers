import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-active-players-discord');
}

export default function Tibia854WithActivePlayersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-active-players-discord" />;
}
