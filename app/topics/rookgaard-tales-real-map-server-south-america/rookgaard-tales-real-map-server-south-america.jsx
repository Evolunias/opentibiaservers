import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-south-america');
}

export default function RookgaardTalesRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-south-america" />;
}
