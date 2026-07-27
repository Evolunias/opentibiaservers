import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-forum');
}

export default function OldSchoolAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-forum" />;
}
