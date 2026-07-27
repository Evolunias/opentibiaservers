import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-north-america');
}

export default function EvoleraEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-north-america" />;
}
