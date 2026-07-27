import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-history');
}

export default function UniteraHistoryKeywordPage() {
  return <StaticKeywordPage slug="unitera-history" />;
}
