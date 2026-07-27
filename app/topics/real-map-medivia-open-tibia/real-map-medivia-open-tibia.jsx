import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-open-tibia');
}

export default function RealMapMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-open-tibia" />;
}
