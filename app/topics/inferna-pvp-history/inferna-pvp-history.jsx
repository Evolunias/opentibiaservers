import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-pvp-history');
}

export default function InfernaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="inferna-pvp-history" />;
}
