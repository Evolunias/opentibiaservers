import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-usa');
}

export default function NoResetForumUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-usa" />;
}
