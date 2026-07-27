import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-open-tibia');
}

export default function RealMapRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-open-tibia" />;
}
