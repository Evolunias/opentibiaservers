import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-pvp-history');
}

export default function PremiaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="premia-pvp-history" />;
}
