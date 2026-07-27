import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-france');
}

export default function RuthlessChaosEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-france" />;
}
