import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-evo-server');
}

export default function Marolaot14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-evo-server" />;
}
