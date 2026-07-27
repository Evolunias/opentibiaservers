import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-usa');
}

export default function RuthlessChaosEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-usa" />;
}
