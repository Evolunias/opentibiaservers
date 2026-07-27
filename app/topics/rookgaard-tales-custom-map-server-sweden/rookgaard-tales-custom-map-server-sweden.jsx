import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-custom-map-server-sweden');
}

export default function RookgaardTalesCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-custom-map-server-sweden" />;
}
