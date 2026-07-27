import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-ot');
}

export default function NoResetRuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-ot" />;
}
