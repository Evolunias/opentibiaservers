import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-ots');
}

export default function RealMapRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-ots" />;
}
