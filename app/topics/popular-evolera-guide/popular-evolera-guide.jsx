import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-guide');
}

export default function PopularEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-guide" />;
}
