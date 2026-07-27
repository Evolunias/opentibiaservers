import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-poland-server');
}

export default function MarolaotPolandServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-poland-server" />;
}
