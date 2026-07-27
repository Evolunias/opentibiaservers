import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-guide');
}

export default function NewSeasonEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-guide" />;
}
