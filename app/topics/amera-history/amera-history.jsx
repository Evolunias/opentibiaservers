import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-history');
}

export default function AmeraHistoryKeywordPage() {
  return <StaticKeywordPage slug="amera-history" />;
}
