import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-low-exp-server');
}

export default function RuthlessChaos100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-low-exp-server" />;
}
