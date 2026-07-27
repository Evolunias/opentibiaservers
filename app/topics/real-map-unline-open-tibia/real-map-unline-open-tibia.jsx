import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-open-tibia');
}

export default function RealMapUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-open-tibia" />;
}
