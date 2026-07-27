import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-history');
}

export default function GuardiaHistoryKeywordPage() {
  return <StaticKeywordPage slug="guardia-history" />;
}
