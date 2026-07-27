import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-uk');
}

export default function RookgaardTalesCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-uk" />;
}
