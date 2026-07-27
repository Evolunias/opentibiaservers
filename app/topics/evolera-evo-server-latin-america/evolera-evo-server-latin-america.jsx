import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-latin-america');
}

export default function EvoleraEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-latin-america" />;
}
