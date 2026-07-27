import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-4-evo-server');
}

export default function RuthlessChaos84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-4-evo-server" />;
}
