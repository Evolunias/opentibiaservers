import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-argentina');
}

export default function RuthlessChaosEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-argentina" />;
}
