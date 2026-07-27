import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-1-evo-server');
}

export default function Marolaot71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-1-evo-server" />;
}
