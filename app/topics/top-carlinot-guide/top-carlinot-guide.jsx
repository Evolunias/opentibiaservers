import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-guide');
}

export default function TopCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-guide" />;
}
