import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-12-real-map-server');
}

export default function RuthlessChaos12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-12-real-map-server" />;
}
