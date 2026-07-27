import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-evo-servers');
}

export default function Marolaot15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-evo-servers" />;
}
