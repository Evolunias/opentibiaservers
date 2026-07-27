import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-canada');
}

export default function EvoluniaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-canada" />;
}
