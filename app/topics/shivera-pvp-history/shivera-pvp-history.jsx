import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-pvp-history');
}

export default function ShiveraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="shivera-pvp-history" />;
}
