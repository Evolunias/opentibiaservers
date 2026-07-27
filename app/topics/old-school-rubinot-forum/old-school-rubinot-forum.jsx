import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-forum');
}

export default function OldSchoolRubinotForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-forum" />;
}
