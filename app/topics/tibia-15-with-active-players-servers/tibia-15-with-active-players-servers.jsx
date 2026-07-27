import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-servers');
}

export default function Tibia15WithActivePlayersServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-servers" />;
}
