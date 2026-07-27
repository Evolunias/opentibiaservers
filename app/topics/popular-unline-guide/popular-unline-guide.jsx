import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-guide');
}

export default function PopularUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-guide" />;
}
