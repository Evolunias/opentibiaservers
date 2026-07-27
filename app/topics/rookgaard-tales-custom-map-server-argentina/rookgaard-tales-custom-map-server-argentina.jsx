import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-argentina');
}

export default function RookgaardTalesCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-argentina" />;
}
