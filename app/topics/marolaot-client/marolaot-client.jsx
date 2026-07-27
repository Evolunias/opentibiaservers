import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-client');
}

export default function MarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="marolaot-client" />;
}
