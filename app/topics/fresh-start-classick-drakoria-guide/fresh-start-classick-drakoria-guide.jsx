import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-guide');
}

export default function FreshStartClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-guide" />;
}
