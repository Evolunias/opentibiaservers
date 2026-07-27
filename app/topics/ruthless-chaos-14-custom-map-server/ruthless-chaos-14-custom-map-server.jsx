import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-custom-map-server');
}

export default function RuthlessChaos14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-custom-map-server" />;
}
