import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-history');
}

export default function LiberaHistoryKeywordPage() {
  return <StaticKeywordPage slug="libera-history" />;
}
