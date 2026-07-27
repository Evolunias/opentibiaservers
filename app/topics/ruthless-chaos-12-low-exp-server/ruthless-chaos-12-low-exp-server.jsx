import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-12-low-exp-server');
}

export default function RuthlessChaos12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-12-low-exp-server" />;
}
