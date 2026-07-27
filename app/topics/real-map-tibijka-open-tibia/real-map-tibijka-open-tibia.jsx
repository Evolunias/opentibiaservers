import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-open-tibia');
}

export default function RealMapTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-open-tibia" />;
}
