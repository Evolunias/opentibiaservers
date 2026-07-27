import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-4-evo-server');
}

export default function Marolaot74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-4-evo-server" />;
}
