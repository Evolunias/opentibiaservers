import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-forum');
}

export default function TopDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-forum" />;
}
