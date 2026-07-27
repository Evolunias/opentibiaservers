import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-guide');
}

export default function NewSeasonTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-guide" />;
}
