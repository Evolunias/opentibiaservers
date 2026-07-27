import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-no-reset-server');
}

export default function RuthlessChaos13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-no-reset-server" />;
}
