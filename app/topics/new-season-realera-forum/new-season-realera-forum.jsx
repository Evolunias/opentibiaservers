import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-forum');
}

export default function NewSeasonRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-forum" />;
}
