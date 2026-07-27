import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-custom-map-servers');
}

export default function RuthlessChaos100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-custom-map-servers" />;
}
