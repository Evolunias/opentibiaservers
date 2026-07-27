import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-north-america');
}

export default function EvoluniaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-north-america" />;
}
