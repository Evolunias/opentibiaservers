import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-guide');
}

export default function NewSeasonCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-guide" />;
}
