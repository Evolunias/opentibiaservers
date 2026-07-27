import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-custom-map-servers');
}

export default function RookgaardTales86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-custom-map-servers" />;
}
