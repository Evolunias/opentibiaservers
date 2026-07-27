import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-ots');
}

export default function RealMapCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-ots" />;
}
