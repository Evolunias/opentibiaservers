import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-guide');
}

export default function PopularMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-guide" />;
}
