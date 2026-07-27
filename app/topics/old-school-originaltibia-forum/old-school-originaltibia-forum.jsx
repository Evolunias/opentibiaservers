import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-forum');
}

export default function OldSchoolOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-forum" />;
}
