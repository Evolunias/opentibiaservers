import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-4-no-reset-server');
}

export default function RuthlessChaos84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-4-no-reset-server" />;
}
