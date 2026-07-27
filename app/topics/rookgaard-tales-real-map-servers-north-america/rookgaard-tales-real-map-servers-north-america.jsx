import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-north-america');
}

export default function RookgaardTalesRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-north-america" />;
}
