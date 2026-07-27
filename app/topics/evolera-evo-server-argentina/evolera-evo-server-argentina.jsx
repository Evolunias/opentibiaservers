import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-argentina');
}

export default function EvoleraEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-argentina" />;
}
