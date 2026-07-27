import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-germany');
}

export default function EvoleraFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-germany" />;
}
