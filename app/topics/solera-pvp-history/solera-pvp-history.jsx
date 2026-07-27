import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-pvp-history');
}

export default function SoleraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="solera-pvp-history" />;
}
