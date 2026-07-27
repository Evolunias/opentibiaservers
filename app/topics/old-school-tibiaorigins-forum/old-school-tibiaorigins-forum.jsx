import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-forum');
}

export default function OldSchoolTibiaoriginsForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-forum" />;
}
