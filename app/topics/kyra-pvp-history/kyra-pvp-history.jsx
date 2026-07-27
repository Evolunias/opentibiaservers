import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-pvp-history');
}

export default function KyraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="kyra-pvp-history" />;
}
