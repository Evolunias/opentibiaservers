import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-forum');
}

export default function OldSchoolAmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-forum" />;
}
