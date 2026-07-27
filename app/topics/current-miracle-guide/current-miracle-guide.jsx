import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-guide');
}

export default function CurrentMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-guide" />;
}
