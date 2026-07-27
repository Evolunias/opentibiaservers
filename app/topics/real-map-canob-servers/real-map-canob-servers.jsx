import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-servers');
}

export default function RealMapCanobServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-servers" />;
}
