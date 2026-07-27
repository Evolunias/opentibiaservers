import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ruthless-chaos-server');
}

export default function LowExpRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ruthless-chaos-server" />;
}
