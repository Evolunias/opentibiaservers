import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-pvp-history');
}

export default function CalmeraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="calmera-pvp-history" />;
}
