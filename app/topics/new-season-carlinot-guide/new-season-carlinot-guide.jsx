import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-guide');
}

export default function NewSeasonCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-guide" />;
}
