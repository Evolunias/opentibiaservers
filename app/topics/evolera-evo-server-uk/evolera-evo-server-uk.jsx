import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-uk');
}

export default function EvoleraEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-uk" />;
}
