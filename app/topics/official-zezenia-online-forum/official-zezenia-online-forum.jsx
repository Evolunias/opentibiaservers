import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-forum');
}

export default function OfficialZezeniaOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-forum" />;
}
