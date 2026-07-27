import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-guide');
}

export default function NewSeasonEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-guide" />;
}
