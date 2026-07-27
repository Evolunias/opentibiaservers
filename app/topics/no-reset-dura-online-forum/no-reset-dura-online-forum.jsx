import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-forum');
}

export default function NoResetDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-forum" />;
}
