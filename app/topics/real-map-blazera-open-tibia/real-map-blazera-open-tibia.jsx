import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-open-tibia');
}

export default function RealMapBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-open-tibia" />;
}
