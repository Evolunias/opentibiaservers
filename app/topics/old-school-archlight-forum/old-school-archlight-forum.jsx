import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-forum');
}

export default function OldSchoolArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-forum" />;
}
