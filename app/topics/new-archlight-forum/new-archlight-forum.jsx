import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-forum');
}

export default function NewArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-forum" />;
}
