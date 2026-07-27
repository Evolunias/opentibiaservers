import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-europe');
}

export default function RookgaardTalesRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-europe" />;
}
