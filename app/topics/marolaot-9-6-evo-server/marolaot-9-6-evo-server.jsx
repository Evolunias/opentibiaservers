import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-9-6-evo-server');
}

export default function Marolaot96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-9-6-evo-server" />;
}
