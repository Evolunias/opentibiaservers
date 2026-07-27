import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-mexico');
}

export default function OldSchoolForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-mexico" />;
}
