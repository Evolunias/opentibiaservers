import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-history');
}

export default function SoleraHistoryKeywordPage() {
  return <StaticKeywordPage slug="solera-history" />;
}
