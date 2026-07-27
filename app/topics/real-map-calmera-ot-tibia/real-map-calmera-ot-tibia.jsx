import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-tibia');
}

export default function RealMapCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-tibia" />;
}
