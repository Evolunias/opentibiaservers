import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-poland');
}

export default function EvoleraEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-poland" />;
}
