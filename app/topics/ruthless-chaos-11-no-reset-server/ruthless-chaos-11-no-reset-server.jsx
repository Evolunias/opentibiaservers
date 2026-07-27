import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-no-reset-server');
}

export default function RuthlessChaos11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-no-reset-server" />;
}
