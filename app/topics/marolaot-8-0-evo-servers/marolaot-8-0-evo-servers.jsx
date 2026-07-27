import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-evo-servers');
}

export default function Marolaot80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-evo-servers" />;
}
