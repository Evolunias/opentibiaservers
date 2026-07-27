import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ruthless-chaos-server');
}

export default function CustomMapRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ruthless-chaos-server" />;
}
