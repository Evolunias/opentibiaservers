import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-latin-america');
}

export default function EvoluniaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-latin-america" />;
}
