import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-4-evo-server');
}

export default function RuthlessChaos74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-4-evo-server" />;
}
