import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-12-custom-map-servers');
}

export default function RuthlessChaos12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-12-custom-map-servers" />;
}
