import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-4-evo-server');
}

export default function Marolaot84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-4-evo-server" />;
}
