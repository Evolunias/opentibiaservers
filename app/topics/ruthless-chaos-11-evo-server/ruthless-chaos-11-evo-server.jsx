import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-11-evo-server');
}

export default function RuthlessChaos11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-11-evo-server" />;
}
