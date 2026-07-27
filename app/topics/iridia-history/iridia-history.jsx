import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-history');
}

export default function IridiaHistoryKeywordPage() {
  return <StaticKeywordPage slug="iridia-history" />;
}
