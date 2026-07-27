import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-forum-south-america');
}

export default function OldSchoolForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-forum-south-america" />;
}
