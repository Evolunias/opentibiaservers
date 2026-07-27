import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-no-reset-server');
}

export default function RuthlessChaos14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-no-reset-server" />;
}
