import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-client');
}

export default function RealMapRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-client" />;
}
