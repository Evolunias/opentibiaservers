import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-open-tibia');
}

export default function RealMapRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-open-tibia" />;
}
