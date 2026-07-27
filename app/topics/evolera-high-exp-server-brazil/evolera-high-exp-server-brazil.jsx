import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-brazil');
}

export default function EvoleraHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-brazil" />;
}
