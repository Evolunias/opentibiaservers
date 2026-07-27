import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-guide');
}

export default function NewSeasonOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-guide" />;
}
