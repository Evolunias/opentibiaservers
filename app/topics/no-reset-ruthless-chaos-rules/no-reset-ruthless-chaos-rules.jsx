import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-rules');
}

export default function NoResetRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-rules" />;
}
