import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-history');
}

export default function JuleraHistoryKeywordPage() {
  return <StaticKeywordPage slug="julera-history" />;
}
