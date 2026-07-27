import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zunera-ot-tibia');
}

export default function RealMapZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-zunera-ot-tibia" />;
}
