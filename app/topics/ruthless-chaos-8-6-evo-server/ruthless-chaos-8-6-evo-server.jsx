import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-6-evo-server');
}

export default function RuthlessChaos86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-6-evo-server" />;
}
