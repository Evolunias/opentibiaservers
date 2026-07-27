import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-with-active-players-server');
}

export default function Evolera12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-with-active-players-server" />;
}
