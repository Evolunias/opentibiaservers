import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-12-custom-map-server');
}

export default function RuthlessChaos12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-12-custom-map-server" />;
}
