import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-4-custom-map-servers');
}

export default function RuthlessChaos74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-4-custom-map-servers" />;
}
