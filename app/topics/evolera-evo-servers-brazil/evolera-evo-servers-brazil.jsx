import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-servers-brazil');
}

export default function EvoleraEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-servers-brazil" />;
}
