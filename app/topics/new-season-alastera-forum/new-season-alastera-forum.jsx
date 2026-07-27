import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-forum');
}

export default function NewSeasonAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-forum" />;
}
