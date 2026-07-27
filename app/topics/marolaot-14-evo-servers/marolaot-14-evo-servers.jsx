import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-evo-servers');
}

export default function Marolaot14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-evo-servers" />;
}
