import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-tibia');
}

export default function RealMapNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-tibia" />;
}
