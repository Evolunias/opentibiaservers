import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-history');
}

export default function ReneraHistoryKeywordPage() {
  return <StaticKeywordPage slug="renera-history" />;
}
