import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-forum');
}

export default function OldSchoolKasteriaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-forum" />;
}
