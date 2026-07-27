import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-custom-map-servers');
}

export default function RuthlessChaos14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-custom-map-servers" />;
}
