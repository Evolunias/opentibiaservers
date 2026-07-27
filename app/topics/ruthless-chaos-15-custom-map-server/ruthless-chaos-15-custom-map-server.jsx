import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-custom-map-server');
}

export default function RuthlessChaos15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-custom-map-server" />;
}
