import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-server');
}

export default function Tibia12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-server" />;
}
