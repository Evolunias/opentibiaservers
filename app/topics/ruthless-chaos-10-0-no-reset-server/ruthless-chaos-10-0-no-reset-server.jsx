import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-no-reset-server');
}

export default function RuthlessChaos100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-no-reset-server" />;
}
