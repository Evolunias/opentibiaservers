import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-evo-servers');
}

export default function Marolaot11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-evo-servers" />;
}
