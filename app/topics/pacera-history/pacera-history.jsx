import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-history');
}

export default function PaceraHistoryKeywordPage() {
  return <StaticKeywordPage slug="pacera-history" />;
}
