import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-open-tibia');
}

export default function RealMapCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-open-tibia" />;
}
