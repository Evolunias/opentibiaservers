import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-open-tibia');
}

export default function RealMapRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-open-tibia" />;
}
