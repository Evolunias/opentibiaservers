import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-forum');
}

export default function OldSchoolOtmadnessForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-forum" />;
}
