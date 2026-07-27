import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-guide');
}

export default function NewSeasonKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-guide" />;
}
