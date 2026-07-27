import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-forum');
}

export default function NewSeasonCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-forum" />;
}
