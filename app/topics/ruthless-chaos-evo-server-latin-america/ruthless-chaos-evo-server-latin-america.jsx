import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-latin-america');
}

export default function RuthlessChaosEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-latin-america" />;
}
