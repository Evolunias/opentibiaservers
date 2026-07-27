import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-guide');
}

export default function NewSeasonBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-guide" />;
}
