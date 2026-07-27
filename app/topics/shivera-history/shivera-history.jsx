import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-history');
}

export default function ShiveraHistoryKeywordPage() {
  return <StaticKeywordPage slug="shivera-history" />;
}
