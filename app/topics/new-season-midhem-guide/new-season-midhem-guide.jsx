import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-midhem-guide');
}

export default function NewSeasonMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-midhem-guide" />;
}
