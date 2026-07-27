import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star');
}

export default function NewSeasonNtoStarKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star" />;
}
