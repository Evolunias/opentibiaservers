import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-germany');
}

export default function RuthlessChaosEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-germany" />;
}
