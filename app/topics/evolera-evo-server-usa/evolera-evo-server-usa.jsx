import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-usa');
}

export default function EvoleraEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-usa" />;
}
