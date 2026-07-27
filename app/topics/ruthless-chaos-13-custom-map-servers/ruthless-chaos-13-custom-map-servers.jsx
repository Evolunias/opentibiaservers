import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-custom-map-servers');
}

export default function RuthlessChaos13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-custom-map-servers" />;
}
