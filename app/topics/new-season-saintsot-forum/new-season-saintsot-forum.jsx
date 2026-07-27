import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-forum');
}

export default function NewSeasonSaintsotForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-forum" />;
}
