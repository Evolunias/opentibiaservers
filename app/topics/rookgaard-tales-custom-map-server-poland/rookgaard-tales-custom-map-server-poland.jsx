import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-poland');
}

export default function RookgaardTalesCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-poland" />;
}
