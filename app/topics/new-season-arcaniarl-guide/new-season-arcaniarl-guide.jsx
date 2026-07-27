import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-guide');
}

export default function NewSeasonArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-guide" />;
}
