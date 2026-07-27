import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-north-america');
}

export default function OldSchoolForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-north-america" />;
}
