import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-history');
}

export default function EterniaHistoryKeywordPage() {
  return <StaticKeywordPage slug="eternia-history" />;
}
