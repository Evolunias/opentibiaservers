import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-guide');
}

export default function NewSeasonSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-guide" />;
}
