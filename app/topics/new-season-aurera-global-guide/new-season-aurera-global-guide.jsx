import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-guide');
}

export default function NewSeasonAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-guide" />;
}
