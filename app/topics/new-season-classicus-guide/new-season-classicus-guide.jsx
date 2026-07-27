import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-guide');
}

export default function NewSeasonClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-guide" />;
}
