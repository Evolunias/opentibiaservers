import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-guide');
}

export default function NewSeasonAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-guide" />;
}
