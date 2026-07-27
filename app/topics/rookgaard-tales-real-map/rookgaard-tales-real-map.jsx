import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map');
}

export default function RookgaardTalesRealMapKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map" />;
}
