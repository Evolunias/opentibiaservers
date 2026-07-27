import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-guide');
}

export default function BestEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-guide" />;
}
