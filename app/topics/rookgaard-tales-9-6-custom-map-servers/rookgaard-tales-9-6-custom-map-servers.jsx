import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-9-6-custom-map-servers');
}

export default function RookgaardTales96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-9-6-custom-map-servers" />;
}
