import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-poland');
}

export default function RookgaardTalesRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-poland" />;
}
