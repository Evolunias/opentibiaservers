import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-uk');
}

export default function EvoleraFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-uk" />;
}
