import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-forum');
}

export default function CustomArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-forum" />;
}
