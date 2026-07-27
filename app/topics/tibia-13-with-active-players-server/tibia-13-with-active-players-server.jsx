import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-server');
}

export default function Tibia13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-server" />;
}
