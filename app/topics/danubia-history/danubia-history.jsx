import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-history');
}

export default function DanubiaHistoryKeywordPage() {
  return <StaticKeywordPage slug="danubia-history" />;
}
