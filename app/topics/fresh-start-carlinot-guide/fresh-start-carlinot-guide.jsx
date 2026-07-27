import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-guide');
}

export default function FreshStartCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-guide" />;
}
