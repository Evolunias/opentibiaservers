import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-canada');
}

export default function EvoleraEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-canada" />;
}
