import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-germany');
}

export default function RookgaardTalesCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-germany" />;
}
