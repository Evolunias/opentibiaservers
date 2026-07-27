import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-forum');
}

export default function FreshStartDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-forum" />;
}
