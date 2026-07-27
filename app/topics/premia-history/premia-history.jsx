import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-history');
}

export default function PremiaHistoryKeywordPage() {
  return <StaticKeywordPage slug="premia-history" />;
}
