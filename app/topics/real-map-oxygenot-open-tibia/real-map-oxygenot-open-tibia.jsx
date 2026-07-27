import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-open-tibia');
}

export default function RealMapOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-open-tibia" />;
}
