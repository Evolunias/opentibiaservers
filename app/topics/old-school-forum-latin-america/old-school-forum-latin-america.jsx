import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-latin-america');
}

export default function OldSchoolForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-latin-america" />;
}
