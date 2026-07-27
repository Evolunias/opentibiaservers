import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-guide');
}

export default function ClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-guide" />;
}
