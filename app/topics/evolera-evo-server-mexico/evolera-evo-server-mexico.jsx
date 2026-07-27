import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-mexico');
}

export default function EvoleraEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-mexico" />;
}
