import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-europe');
}

export default function RookgaardTalesCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-europe" />;
}
