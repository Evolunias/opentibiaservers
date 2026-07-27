import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-history');
}

export default function HoneraHistoryKeywordPage() {
  return <StaticKeywordPage slug="honera-history" />;
}
