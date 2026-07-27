import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-guide');
}

export default function TopMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-guide" />;
}
