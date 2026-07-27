import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-ot-server');
}

export default function RealMapCanobOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-ot-server" />;
}
