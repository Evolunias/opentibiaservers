import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-forum');
}

export default function PopularDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-forum" />;
}
