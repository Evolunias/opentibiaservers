import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-evo-server');
}

export default function RuthlessChaos13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-evo-server" />;
}
