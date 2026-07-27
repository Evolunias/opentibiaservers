import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-guide');
}

export default function RealMapMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-guide" />;
}
