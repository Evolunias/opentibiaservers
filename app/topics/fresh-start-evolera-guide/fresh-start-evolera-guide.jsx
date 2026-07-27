import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-guide');
}

export default function FreshStartEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-guide" />;
}
