import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-guide');
}

export default function NewSeasonOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-guide" />;
}
