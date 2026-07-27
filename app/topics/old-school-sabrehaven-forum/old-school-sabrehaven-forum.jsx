import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-sabrehaven-forum');
}

export default function OldSchoolSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-sabrehaven-forum" />;
}
