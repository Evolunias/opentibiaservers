import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-servers-argentina');
}

export default function RookgaardTalesCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-servers-argentina" />;
}
