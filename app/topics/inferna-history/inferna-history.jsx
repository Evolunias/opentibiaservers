import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-history');
}

export default function InfernaHistoryKeywordPage() {
  return <StaticKeywordPage slug="inferna-history" />;
}
