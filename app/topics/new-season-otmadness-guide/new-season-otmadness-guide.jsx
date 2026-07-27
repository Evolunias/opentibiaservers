import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-guide');
}

export default function NewSeasonOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-guide" />;
}
