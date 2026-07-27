import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-guide');
}

export default function NewSeasonRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-guide" />;
}
