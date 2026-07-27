import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-custom-map-servers');
}

export default function RookgaardTales100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-custom-map-servers" />;
}
