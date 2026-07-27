import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-history');
}

export default function AnticaHistoryKeywordPage() {
  return <StaticKeywordPage slug="antica-history" />;
}
