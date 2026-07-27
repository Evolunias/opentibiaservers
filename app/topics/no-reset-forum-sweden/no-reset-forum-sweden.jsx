import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-sweden');
}

export default function NoResetForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-sweden" />;
}
