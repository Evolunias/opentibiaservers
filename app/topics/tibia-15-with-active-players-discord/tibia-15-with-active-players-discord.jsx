import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-discord');
}

export default function Tibia15WithActivePlayersDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-discord" />;
}
