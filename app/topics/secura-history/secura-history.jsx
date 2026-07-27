import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-history');
}

export default function SecuraHistoryKeywordPage() {
  return <StaticKeywordPage slug="secura-history" />;
}
