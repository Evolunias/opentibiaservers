import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zunera-ot-open-tibia');
}

export default function RealMapZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-zunera-ot-open-tibia" />;
}
