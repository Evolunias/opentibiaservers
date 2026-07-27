import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-forum');
}

export default function NewSeasonRealestaForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-forum" />;
}
