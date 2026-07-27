import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-uk');
}

export default function EvoleraHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-uk" />;
}
