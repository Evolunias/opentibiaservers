import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-evo-server');
}

export default function Marolaot15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-evo-server" />;
}
