import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-map');
}

export default function MarolaotMapKeywordPage() {
  return <StaticKeywordPage slug="marolaot-map" />;
}
