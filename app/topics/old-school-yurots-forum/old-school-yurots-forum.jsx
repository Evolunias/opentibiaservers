import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-yurots-forum');
}

export default function OldSchoolYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-yurots-forum" />;
}
