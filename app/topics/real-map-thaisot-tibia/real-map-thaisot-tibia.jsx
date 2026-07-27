import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-tibia');
}

export default function RealMapThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-tibia" />;
}
