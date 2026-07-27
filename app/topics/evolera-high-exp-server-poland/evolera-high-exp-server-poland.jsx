import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-poland');
}

export default function EvoleraHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-poland" />;
}
