import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-forum');
}

export default function PopularArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-forum" />;
}
