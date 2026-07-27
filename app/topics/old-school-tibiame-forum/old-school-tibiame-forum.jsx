import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-forum');
}

export default function OldSchoolTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-forum" />;
}
