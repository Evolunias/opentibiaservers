import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-pvp-history');
}

export default function ReneraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="renera-pvp-history" />;
}
