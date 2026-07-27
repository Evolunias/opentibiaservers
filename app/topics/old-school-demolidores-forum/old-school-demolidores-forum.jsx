import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-forum');
}

export default function OldSchoolDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-forum" />;
}
