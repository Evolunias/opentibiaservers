import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-forum');
}

export default function OldSchoolNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-forum" />;
}
