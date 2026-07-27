import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-history');
}

export default function LuceraHistoryKeywordPage() {
  return <StaticKeywordPage slug="lucera-history" />;
}
