import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-9-6-evo-server');
}

export default function RuthlessChaos96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-9-6-evo-server" />;
}
