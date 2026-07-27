import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-server-uk');
}

export default function RookgaardTalesRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-server-uk" />;
}
