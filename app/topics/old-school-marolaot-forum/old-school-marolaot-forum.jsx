import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-marolaot-forum');
}

export default function OldSchoolMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-marolaot-forum" />;
}
