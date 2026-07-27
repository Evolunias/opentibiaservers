import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-forum');
}

export default function OldSchoolElderaForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-forum" />;
}
