import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-real-map-servers-germany');
}

export default function RookgaardTalesRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-real-map-servers-germany" />;
}
