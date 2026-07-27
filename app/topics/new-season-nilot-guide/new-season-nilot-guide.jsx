import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-guide');
}

export default function NewSeasonNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-guide" />;
}
