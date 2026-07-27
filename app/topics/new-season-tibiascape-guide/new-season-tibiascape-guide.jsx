import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-guide');
}

export default function NewSeasonTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-guide" />;
}
