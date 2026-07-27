import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-1-evo-servers');
}

export default function Marolaot71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-1-evo-servers" />;
}
