import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-guide');
}

export default function NewSeasonRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-guide" />;
}
