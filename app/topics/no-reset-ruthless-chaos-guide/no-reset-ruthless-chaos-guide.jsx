import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-guide');
}

export default function NoResetRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-guide" />;
}
