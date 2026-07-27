import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-open-tibia');
}

export default function RealMapRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-open-tibia" />;
}
