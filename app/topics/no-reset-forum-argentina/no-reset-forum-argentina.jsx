import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-argentina');
}

export default function NoResetForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-argentina" />;
}
