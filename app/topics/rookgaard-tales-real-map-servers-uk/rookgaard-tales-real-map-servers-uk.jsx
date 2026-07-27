import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-uk');
}

export default function RookgaardTalesRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-uk" />;
}
