import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-europe');
}

export default function RookgaardTalesRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-europe" />;
}
