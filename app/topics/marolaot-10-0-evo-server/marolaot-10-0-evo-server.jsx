import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-10-0-evo-server');
}

export default function Marolaot100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-10-0-evo-server" />;
}
