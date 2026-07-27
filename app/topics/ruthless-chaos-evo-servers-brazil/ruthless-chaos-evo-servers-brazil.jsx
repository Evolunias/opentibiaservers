import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-servers-brazil');
}

export default function RuthlessChaosEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-servers-brazil" />;
}
