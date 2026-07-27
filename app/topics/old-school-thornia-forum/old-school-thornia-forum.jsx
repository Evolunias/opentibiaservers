import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-forum');
}

export default function OldSchoolThorniaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-forum" />;
}
