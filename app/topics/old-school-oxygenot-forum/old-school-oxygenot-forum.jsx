import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-forum');
}

export default function OldSchoolOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-forum" />;
}
