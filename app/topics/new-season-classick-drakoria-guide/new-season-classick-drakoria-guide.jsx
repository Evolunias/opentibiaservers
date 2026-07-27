import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-guide');
}

export default function NewSeasonClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-guide" />;
}
