import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-72-custom-map-server');
}

export default function RuthlessChaos772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-72-custom-map-server" />;
}
