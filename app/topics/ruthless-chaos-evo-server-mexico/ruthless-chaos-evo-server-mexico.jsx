import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-mexico');
}

export default function RuthlessChaosEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-mexico" />;
}
