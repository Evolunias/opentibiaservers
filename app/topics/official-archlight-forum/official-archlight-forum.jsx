import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-forum');
}

export default function OfficialArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-forum" />;
}
