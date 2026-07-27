import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-canada');
}

export default function RookgaardTalesCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-canada" />;
}
