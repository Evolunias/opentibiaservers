import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-germany');
}

export default function EvoluniaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-germany" />;
}
