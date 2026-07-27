import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-forum');
}

export default function ActiveArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-forum" />;
}
