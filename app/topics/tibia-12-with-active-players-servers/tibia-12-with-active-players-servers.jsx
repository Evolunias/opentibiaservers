import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-servers');
}

export default function Tibia12WithActivePlayersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-servers" />;
}
