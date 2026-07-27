import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zezenia-online-forum');
}

export default function OldSchoolZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-zezenia-online-forum" />;
}
