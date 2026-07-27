import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-uk');
}

export default function RookgaardTalesCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-uk" />;
}
