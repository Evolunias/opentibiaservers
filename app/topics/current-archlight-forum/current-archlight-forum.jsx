import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-forum');
}

export default function CurrentArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-forum" />;
}
