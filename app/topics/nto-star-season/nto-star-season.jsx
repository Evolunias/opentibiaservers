import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-season');
}

export default function NtoStarSeasonKeywordPage() {
  return <StaticKeywordPage slug="nto-star-season" />;
}
