import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-official');
}

export default function NewSeasonNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-official" />;
}
