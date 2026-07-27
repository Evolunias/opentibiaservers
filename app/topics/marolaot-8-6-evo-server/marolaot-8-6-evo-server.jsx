import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-6-evo-server');
}

export default function Marolaot86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-6-evo-server" />;
}
