import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-discord');
}

export default function Tibia11WithActivePlayersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-discord" />;
}
