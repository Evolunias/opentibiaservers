import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-9-6-custom-map-servers');
}

export default function RuthlessChaos96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-9-6-custom-map-servers" />;
}
