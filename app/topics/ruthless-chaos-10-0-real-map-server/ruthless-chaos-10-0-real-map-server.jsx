import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-real-map-server');
}

export default function RuthlessChaos100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-real-map-server" />;
}
