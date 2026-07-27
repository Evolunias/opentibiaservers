import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-real-map-server');
}

export default function RuthlessChaos15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-real-map-server" />;
}
