import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-pvp-history');
}

export default function RuberaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="rubera-pvp-history" />;
}
