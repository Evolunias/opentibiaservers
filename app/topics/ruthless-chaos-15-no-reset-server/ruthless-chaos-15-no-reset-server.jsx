import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-no-reset-server');
}

export default function RuthlessChaos15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-no-reset-server" />;
}
