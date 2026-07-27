import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-servers');
}

export default function Tibia13WithActivePlayersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-servers" />;
}
