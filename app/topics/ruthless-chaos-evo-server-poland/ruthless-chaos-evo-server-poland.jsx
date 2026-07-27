import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-poland');
}

export default function RuthlessChaosEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-poland" />;
}
