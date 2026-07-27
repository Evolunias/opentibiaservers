import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-poland-servers');
}

export default function MarolaotPolandServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-poland-servers" />;
}
