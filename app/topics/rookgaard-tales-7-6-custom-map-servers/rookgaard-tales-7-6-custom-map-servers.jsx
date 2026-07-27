import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-6-custom-map-servers');
}

export default function RookgaardTales76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-6-custom-map-servers" />;
}
