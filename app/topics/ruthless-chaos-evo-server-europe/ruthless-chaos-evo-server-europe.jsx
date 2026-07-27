import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-europe');
}

export default function RuthlessChaosEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-europe" />;
}
