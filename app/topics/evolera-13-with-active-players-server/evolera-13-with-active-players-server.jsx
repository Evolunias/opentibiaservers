import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-with-active-players-server');
}

export default function Evolera13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-with-active-players-server" />;
}
