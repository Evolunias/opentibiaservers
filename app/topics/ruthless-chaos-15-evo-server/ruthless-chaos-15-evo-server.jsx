import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-evo-server');
}

export default function RuthlessChaos15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-evo-server" />;
}
