import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-realera-forum');
}

export default function OldSchoolRealeraForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-realera-forum" />;
}
