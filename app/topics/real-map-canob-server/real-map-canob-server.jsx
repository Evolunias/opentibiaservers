import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-server');
}

export default function RealMapCanobServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-server" />;
}
