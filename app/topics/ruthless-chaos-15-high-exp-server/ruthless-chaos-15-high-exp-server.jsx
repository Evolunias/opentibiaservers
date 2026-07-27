import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-high-exp-server');
}

export default function RuthlessChaos15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-high-exp-server" />;
}
