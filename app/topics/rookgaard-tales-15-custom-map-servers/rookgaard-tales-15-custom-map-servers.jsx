import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-custom-map-servers');
}

export default function RookgaardTales15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-custom-map-servers" />;
}
