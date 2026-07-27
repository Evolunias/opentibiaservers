import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos');
}

export default function NoResetRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos" />;
}
