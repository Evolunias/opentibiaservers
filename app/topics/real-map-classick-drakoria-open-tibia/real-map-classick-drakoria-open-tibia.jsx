import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-open-tibia');
}

export default function RealMapClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-open-tibia" />;
}
