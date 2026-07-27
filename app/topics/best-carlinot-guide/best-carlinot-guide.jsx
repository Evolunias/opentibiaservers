import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-guide');
}

export default function BestCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-guide" />;
}
