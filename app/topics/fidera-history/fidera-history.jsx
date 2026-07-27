import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-history');
}

export default function FideraHistoryKeywordPage() {
  return <StaticKeywordPage slug="fidera-history" />;
}
