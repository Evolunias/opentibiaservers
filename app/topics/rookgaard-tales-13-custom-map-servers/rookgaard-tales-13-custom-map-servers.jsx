import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-custom-map-servers');
}

export default function RookgaardTales13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-custom-map-servers" />;
}
