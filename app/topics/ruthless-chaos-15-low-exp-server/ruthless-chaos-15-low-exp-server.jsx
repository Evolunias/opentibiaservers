import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-low-exp-server');
}

export default function RuthlessChaos15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-low-exp-server" />;
}
