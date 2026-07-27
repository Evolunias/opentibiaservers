import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-custom-map-servers');
}

export default function RookgaardTales80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-custom-map-servers" />;
}
