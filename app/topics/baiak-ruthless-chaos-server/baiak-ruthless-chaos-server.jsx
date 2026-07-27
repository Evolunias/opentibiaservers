import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ruthless-chaos-server');
}

export default function BaiakRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ruthless-chaos-server" />;
}
