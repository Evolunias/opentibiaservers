import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-pvp-history');
}

export default function AnticaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="antica-pvp-history" />;
}
