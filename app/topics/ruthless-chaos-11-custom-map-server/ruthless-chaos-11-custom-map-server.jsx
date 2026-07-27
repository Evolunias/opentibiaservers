import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-custom-map-server');
}

export default function RuthlessChaos11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-custom-map-server" />;
}
