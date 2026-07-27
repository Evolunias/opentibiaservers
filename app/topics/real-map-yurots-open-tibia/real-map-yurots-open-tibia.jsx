import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-open-tibia');
}

export default function RealMapYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-open-tibia" />;
}
