import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ocera-history');
}

export default function OceraHistoryKeywordPage() {
  return <StaticKeywordPage slug="ocera-history" />;
}
