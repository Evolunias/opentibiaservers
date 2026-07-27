import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-pvp-history');
}

export default function PytheraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="pythera-pvp-history" />;
}
