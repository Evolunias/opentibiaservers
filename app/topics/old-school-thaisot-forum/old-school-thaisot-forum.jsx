import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-forum');
}

export default function OldSchoolThaisotForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-forum" />;
}
