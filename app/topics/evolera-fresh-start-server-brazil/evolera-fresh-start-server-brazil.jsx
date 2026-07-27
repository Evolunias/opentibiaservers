import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-brazil');
}

export default function EvoleraFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-brazil" />;
}
