import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-guide');
}

export default function ActiveEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-guide" />;
}
