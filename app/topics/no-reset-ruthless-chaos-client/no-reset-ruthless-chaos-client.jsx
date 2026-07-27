import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-client');
}

export default function NoResetRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-client" />;
}
