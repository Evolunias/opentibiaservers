import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-germany');
}

export default function RookgaardTalesRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-germany" />;
}
