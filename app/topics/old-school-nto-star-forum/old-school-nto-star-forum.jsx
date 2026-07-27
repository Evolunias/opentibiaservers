import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-forum');
}

export default function OldSchoolNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-forum" />;
}
