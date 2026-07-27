import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-map');
}

export default function RookgaardTalesMapKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-map" />;
}
