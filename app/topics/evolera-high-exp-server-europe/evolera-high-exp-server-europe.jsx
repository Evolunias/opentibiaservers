import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-europe');
}

export default function EvoleraHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-europe" />;
}
