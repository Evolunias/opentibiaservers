import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-pvp-history');
}

export default function FideraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="fidera-pvp-history" />;
}
