import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-poland');
}

export default function NoResetForumPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-poland" />;
}
