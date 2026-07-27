import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-ots');
}

export default function NoResetRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-ots" />;
}
