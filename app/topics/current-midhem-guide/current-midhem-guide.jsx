import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-guide');
}

export default function CurrentMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-guide" />;
}
