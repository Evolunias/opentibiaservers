import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-uk');
}

export default function EvoluniaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-uk" />;
}
