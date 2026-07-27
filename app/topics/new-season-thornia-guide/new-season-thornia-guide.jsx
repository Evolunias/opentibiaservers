import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-guide');
}

export default function NewSeasonThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-guide" />;
}
