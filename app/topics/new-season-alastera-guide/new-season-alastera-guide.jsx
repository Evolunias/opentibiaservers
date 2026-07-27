import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-guide');
}

export default function NewSeasonAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-guide" />;
}
