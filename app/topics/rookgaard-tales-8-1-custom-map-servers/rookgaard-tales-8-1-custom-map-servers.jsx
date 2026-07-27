import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-custom-map-servers');
}

export default function RookgaardTales81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-custom-map-servers" />;
}
