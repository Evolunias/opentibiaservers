import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-history');
}

export default function MeneraHistoryKeywordPage() {
  return <StaticKeywordPage slug="menera-history" />;
}
