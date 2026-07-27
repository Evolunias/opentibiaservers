import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-germany');
}

export default function EvoleraHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-germany" />;
}
