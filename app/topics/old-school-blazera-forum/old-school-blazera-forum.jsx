import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-blazera-forum');
}

export default function OldSchoolBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-blazera-forum" />;
}
