import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-server');
}

export default function NoResetRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-server" />;
}
