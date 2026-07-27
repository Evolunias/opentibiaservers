import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-forum');
}

export default function BestArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-forum" />;
}
