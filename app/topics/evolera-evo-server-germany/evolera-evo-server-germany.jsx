import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-germany');
}

export default function EvoleraEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-germany" />;
}
