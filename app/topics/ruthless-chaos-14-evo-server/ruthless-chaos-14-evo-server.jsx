import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-evo-server');
}

export default function RuthlessChaos14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-evo-server" />;
}
