import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-uk');
}

export default function HighExpForumUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-uk" />;
}
