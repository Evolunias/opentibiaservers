import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-forum');
}

export default function OldSchoolTibiaServerForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-forum" />;
}
