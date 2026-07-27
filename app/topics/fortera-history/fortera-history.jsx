import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-history');
}

export default function ForteraHistoryKeywordPage() {
  return <StaticKeywordPage slug="fortera-history" />;
}
