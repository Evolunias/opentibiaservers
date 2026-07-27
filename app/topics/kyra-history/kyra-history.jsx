import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-history');
}

export default function KyraHistoryKeywordPage() {
  return <StaticKeywordPage slug="kyra-history" />;
}
