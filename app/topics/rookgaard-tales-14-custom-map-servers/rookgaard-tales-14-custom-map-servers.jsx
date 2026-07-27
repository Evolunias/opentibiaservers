import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-custom-map-servers');
}

export default function RookgaardTales14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-custom-map-servers" />;
}
