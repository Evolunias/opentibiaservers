import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-1-custom-map-servers');
}

export default function RuthlessChaos81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-1-custom-map-servers" />;
}
