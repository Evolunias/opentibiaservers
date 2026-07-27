import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-98-custom-map-server');
}

export default function RuthlessChaos1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-98-custom-map-server" />;
}
