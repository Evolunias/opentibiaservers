import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-evo-server');
}

export default function Marolaot80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-evo-server" />;
}
