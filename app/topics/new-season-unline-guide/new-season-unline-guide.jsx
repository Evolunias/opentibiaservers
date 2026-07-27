import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-guide');
}

export default function NewSeasonUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-guide" />;
}
