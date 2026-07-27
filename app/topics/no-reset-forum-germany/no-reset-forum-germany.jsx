import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-germany');
}

export default function NoResetForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-germany" />;
}
