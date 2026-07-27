import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-guide');
}

export default function NewSeasonRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-guide" />;
}
