import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-4-custom-map-server');
}

export default function RuthlessChaos74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-4-custom-map-server" />;
}
