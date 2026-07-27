import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map');
}

export default function MarolaotRealMapKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map" />;
}
