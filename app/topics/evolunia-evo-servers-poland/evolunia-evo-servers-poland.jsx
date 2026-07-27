import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-servers-poland');
}

export default function EvoluniaEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-servers-poland" />;
}
