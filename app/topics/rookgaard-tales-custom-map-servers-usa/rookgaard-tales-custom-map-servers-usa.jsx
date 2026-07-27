import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-usa');
}

export default function RookgaardTalesCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-usa" />;
}
