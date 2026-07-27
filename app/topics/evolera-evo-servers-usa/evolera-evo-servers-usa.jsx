import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-servers-usa');
}

export default function EvoleraEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-servers-usa" />;
}
