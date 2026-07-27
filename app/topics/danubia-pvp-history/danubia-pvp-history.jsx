import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-pvp-history');
}

export default function DanubiaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="danubia-pvp-history" />;
}
