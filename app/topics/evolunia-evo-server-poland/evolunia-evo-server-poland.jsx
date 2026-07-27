import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-poland');
}

export default function EvoluniaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-poland" />;
}
