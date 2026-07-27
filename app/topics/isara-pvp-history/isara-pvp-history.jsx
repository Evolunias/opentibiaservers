import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-pvp-history');
}

export default function IsaraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="isara-pvp-history" />;
}
