import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-forum');
}

export default function NewSeasonTibianusForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-forum" />;
}
