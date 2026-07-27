import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-europe');
}

export default function EvoleraEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-europe" />;
}
