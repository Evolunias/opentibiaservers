import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-pvp-history');
}

export default function LiberaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="libera-pvp-history" />;
}
