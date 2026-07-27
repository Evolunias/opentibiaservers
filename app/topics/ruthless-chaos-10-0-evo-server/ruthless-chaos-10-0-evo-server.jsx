import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-evo-server');
}

export default function RuthlessChaos100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-evo-server" />;
}
