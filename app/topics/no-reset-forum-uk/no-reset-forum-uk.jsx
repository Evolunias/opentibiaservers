import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-uk');
}

export default function NoResetForumUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-uk" />;
}
