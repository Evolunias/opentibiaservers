import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-client');
}

export default function RealMapCanobClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-client" />;
}
