import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-with-active-players-server');
}

export default function Evolera15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-with-active-players-server" />;
}
