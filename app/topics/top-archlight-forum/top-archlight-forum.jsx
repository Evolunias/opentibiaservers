import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-forum');
}

export default function TopArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-forum" />;
}
