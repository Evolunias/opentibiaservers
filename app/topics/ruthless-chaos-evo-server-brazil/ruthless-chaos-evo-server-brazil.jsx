import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-brazil');
}

export default function RuthlessChaosEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-brazil" />;
}
