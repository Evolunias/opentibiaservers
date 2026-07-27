import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-poland');
}

export default function RookgaardTalesCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-poland" />;
}
