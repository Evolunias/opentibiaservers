import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-active-players-discord');
}

export default function Tibia74WithActivePlayersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-active-players-discord" />;
}
