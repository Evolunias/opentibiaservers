import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-guide');
}

export default function NewSeasonThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-guide" />;
}
