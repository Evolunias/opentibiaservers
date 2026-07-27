import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-guide');
}

export default function NewEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-guide" />;
}
