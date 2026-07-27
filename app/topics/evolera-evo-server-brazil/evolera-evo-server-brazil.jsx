import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-brazil');
}

export default function EvoleraEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-brazil" />;
}
