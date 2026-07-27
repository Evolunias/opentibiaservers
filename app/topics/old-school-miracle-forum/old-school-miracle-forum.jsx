import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-forum');
}

export default function OldSchoolMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-forum" />;
}
