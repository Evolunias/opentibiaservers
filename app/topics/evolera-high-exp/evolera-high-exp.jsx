import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp');
}

export default function EvoleraHighExpKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp" />;
}
