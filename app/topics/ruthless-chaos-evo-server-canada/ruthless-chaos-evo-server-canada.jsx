import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-canada');
}

export default function RuthlessChaosEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-canada" />;
}
