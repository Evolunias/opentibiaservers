import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-europe');
}

export default function RookgaardTalesCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-europe" />;
}
