import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-login');
}

export default function RealMapCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-login" />;
}
