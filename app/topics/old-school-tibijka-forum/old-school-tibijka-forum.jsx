import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-forum');
}

export default function OldSchoolTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-forum" />;
}
