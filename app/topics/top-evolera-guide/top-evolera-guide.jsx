import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-guide');
}

export default function TopEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-guide" />;
}
