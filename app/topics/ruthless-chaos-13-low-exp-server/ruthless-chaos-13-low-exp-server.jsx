import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-low-exp-server');
}

export default function RuthlessChaos13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-low-exp-server" />;
}
