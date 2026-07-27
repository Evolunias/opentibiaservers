import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-open-tibia');
}

export default function RealMapElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-open-tibia" />;
}
