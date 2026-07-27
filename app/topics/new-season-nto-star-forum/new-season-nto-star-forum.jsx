import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-forum');
}

export default function NewSeasonNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-forum" />;
}
