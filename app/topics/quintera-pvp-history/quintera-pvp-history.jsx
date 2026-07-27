import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-pvp-history');
}

export default function QuinteraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="quintera-pvp-history" />;
}
