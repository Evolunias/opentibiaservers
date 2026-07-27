import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-servers');
}

export default function RealMapRuthlessChaosServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-servers" />;
}
