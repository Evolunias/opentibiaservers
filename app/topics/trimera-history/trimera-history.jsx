import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-history');
}

export default function TrimeraHistoryKeywordPage() {
  return <StaticKeywordPage slug="trimera-history" />;
}
