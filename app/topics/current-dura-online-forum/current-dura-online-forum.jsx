import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-forum');
}

export default function CurrentDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-forum" />;
}
