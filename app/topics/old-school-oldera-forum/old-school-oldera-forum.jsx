import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-forum');
}

export default function OldSchoolOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-forum" />;
}
