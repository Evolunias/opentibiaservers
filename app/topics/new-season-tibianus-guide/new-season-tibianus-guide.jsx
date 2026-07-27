import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-guide');
}

export default function NewSeasonTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-guide" />;
}
