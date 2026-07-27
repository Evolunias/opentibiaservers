import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-brazil');
}

export default function EvoluniaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-brazil" />;
}
