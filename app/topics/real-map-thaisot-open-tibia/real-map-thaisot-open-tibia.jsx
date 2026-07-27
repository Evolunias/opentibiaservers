import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-open-tibia');
}

export default function RealMapThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-open-tibia" />;
}
