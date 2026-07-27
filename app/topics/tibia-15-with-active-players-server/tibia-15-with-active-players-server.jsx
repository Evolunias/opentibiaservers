import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-server');
}

export default function Tibia15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-server" />;
}
