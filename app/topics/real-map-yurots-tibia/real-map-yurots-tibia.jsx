import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-tibia');
}

export default function RealMapYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-tibia" />;
}
