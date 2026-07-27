import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-history');
}

export default function TenebraHistoryKeywordPage() {
  return <StaticKeywordPage slug="tenebra-history" />;
}
