import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-history');
}

export default function NeranaHistoryKeywordPage() {
  return <StaticKeywordPage slug="nerana-history" />;
}
