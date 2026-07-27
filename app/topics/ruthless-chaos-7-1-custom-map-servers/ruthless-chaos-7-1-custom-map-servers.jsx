import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-1-custom-map-servers');
}

export default function RuthlessChaos71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-1-custom-map-servers" />;
}
