import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiara-forum');
}

export default function OldSchoolTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiara-forum" />;
}
