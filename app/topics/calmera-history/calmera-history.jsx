import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-history');
}

export default function CalmeraHistoryKeywordPage() {
  return <StaticKeywordPage slug="calmera-history" />;
}
