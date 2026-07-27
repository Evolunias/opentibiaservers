import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-north-america');
}

export default function RookgaardTalesRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-north-america" />;
}
