import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-6-custom-map-server');
}

export default function RuthlessChaos76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-6-custom-map-server" />;
}
