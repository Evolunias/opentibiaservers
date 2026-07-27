import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline-forum');
}

export default function OldSchoolUnlineForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline-forum" />;
}
