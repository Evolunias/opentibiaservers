import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-guide');
}

export default function NewClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-guide" />;
}
