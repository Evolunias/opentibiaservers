import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-forum');
}

export default function OldSchoolMadnessaliveForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-forum" />;
}
