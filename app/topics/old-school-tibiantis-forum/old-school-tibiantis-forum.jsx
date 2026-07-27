import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiantis-forum');
}

export default function OldSchoolTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiantis-forum" />;
}
