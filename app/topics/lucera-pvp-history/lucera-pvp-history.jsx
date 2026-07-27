import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-pvp-history');
}

export default function LuceraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="lucera-pvp-history" />;
}
