import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ruthless-chaos-servers');
}

export default function CustomMapRuthlessChaosServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ruthless-chaos-servers" />;
}
