import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-real-map-server');
}

export default function RuthlessChaos14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-real-map-server" />;
}
