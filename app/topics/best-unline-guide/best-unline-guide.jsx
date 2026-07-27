import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-guide');
}

export default function BestUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="best-unline-guide" />;
}
