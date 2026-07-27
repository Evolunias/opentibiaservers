import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-custom-map-servers');
}

export default function RookgaardTales11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-custom-map-servers" />;
}
