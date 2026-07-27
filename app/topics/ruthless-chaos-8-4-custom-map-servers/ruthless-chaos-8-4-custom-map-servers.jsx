import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-4-custom-map-servers');
}

export default function RuthlessChaos84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-4-custom-map-servers" />;
}
