import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-0-low-exp-server');
}

export default function RuthlessChaos80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-0-low-exp-server" />;
}
