import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-open-tibia');
}

export default function RealMapOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-open-tibia" />;
}
