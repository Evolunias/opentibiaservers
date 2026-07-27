import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-open-tibia');
}

export default function RealMapAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-open-tibia" />;
}
