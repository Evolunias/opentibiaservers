import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ruthless-chaos-server');
}

export default function PvpeRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ruthless-chaos-server" />;
}
