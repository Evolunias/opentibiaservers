import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-custom-map-servers');
}

export default function RookgaardTales12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-custom-map-servers" />;
}
