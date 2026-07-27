import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-uk');
}

export default function LowExpForumUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-uk" />;
}
