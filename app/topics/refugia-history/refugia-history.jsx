import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-history');
}

export default function RefugiaHistoryKeywordPage() {
  return <StaticKeywordPage slug="refugia-history" />;
}
