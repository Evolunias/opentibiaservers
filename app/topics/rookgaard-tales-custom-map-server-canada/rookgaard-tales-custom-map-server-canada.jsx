import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-canada');
}

export default function RookgaardTalesCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-canada" />;
}
