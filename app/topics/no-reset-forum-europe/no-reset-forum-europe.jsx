import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-forum-europe');
}

export default function NoResetForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-forum-europe" />;
}
