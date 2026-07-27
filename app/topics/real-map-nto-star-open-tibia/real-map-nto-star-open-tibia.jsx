import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-open-tibia');
}

export default function RealMapNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-open-tibia" />;
}
