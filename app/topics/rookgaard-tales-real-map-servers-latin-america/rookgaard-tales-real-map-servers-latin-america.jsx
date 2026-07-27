import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-latin-america');
}

export default function RookgaardTalesRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-latin-america" />;
}
