import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ruthless-chaos-server');
}

export default function HighExpRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ruthless-chaos-server" />;
}
