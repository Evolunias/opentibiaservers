import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-low-exp-server');
}

export default function RuthlessChaos11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-low-exp-server" />;
}
