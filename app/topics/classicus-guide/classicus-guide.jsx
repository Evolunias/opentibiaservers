import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-guide');
}

export default function ClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="classicus-guide" />;
}
