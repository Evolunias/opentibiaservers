import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-poland');
}

export default function LowExpForumPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-poland" />;
}
