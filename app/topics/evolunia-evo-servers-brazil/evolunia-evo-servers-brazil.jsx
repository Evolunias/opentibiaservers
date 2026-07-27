import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-servers-brazil');
}

export default function EvoluniaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-servers-brazil" />;
}
