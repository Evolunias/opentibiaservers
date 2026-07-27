import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-real-map-server');
}

export default function RuthlessChaos11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-real-map-server" />;
}
