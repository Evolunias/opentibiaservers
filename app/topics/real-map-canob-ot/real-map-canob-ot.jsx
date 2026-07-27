import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-ot');
}

export default function RealMapCanobOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-ot" />;
}
