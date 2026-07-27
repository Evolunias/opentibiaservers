import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dura-online-forum');
}

export default function OldSchoolDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-dura-online-forum" />;
}
