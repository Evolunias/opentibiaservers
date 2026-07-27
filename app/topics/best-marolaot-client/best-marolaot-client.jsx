import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-client');
}

export default function BestMarolaotClientKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-client" />;
}
