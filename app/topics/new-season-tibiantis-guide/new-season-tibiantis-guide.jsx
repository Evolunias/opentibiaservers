import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-guide');
}

export default function NewSeasonTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-guide" />;
}
