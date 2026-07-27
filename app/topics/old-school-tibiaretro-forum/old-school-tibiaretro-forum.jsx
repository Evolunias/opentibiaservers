import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-forum');
}

export default function OldSchoolTibiaretroForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-forum" />;
}
