import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-ot-server');
}

export default function NoResetRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-ot-server" />;
}
