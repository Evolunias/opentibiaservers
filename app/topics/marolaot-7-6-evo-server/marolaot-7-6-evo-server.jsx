import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-evo-server');
}

export default function Marolaot76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-evo-server" />;
}
