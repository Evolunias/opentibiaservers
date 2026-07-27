import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-guide');
}

export default function NewSeasonNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-guide" />;
}
