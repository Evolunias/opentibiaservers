import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-guide');
}

export default function NewSeasonTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-guide" />;
}
