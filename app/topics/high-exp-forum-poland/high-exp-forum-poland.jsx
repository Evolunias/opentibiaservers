import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-poland');
}

export default function HighExpForumPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-poland" />;
}
