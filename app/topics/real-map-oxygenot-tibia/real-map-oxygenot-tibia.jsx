import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-tibia');
}

export default function RealMapOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-tibia" />;
}
