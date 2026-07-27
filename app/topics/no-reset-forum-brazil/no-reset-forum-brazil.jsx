import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-brazil');
}

export default function NoResetForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-brazil" />;
}
