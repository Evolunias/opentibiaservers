import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-custom-map-servers');
}

export default function RuthlessChaos11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-custom-map-servers" />;
}
