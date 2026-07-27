import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-1-evo-server');
}

export default function Marolaot81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-1-evo-server" />;
}
