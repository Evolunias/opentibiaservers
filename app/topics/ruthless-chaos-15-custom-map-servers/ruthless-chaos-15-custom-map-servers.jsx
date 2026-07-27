import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-custom-map-servers');
}

export default function RuthlessChaos15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-custom-map-servers" />;
}
