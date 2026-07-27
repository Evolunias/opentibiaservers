import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-13-evo-server');
}

export default function Marolaot13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-13-evo-server" />;
}
