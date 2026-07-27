import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-forum');
}

export default function OldSchoolTibiascapeForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-forum" />;
}
