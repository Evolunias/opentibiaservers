import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-forum');
}

export default function FreshStartArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-forum" />;
}
