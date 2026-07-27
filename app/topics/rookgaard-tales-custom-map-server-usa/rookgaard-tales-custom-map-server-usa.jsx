import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-usa');
}

export default function RookgaardTalesCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-usa" />;
}
