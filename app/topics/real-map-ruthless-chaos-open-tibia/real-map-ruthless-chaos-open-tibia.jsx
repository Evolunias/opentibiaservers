import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-open-tibia');
}

export default function RealMapRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-open-tibia" />;
}
