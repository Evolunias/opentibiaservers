import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-guide');
}

export default function CustomEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-guide" />;
}
