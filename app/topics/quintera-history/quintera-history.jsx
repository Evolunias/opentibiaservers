import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-history');
}

export default function QuinteraHistoryKeywordPage() {
  return <StaticKeywordPage slug="quintera-history" />;
}
