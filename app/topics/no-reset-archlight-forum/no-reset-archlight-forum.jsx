import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-forum');
}

export default function NoResetArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-forum" />;
}
