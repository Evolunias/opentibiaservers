import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-open-tibia');
}

export default function RealMapCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-open-tibia" />;
}
