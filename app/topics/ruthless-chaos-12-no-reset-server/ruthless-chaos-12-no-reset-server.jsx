import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-12-no-reset-server');
}

export default function RuthlessChaos12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-12-no-reset-server" />;
}
