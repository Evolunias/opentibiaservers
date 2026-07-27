import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-history');
}

export default function IsaraHistoryKeywordPage() {
  return <StaticKeywordPage slug="isara-history" />;
}
