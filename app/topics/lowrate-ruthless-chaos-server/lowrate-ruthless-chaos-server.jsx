import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-server');
}

export default function LowrateRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-server" />;
}
