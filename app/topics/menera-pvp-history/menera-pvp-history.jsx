import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-pvp-history');
}

export default function MeneraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="menera-pvp-history" />;
}
