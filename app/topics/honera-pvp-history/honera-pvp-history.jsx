import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-pvp-history');
}

export default function HoneraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="honera-pvp-history" />;
}
