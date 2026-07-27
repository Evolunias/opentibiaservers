import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-1-custom-map-server');
}

export default function RuthlessChaos81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-1-custom-map-server" />;
}
