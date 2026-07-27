import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-forum');
}

export default function OldSchoolBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-forum" />;
}
