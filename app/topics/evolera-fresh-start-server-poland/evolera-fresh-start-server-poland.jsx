import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-poland');
}

export default function EvoleraFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-poland" />;
}
