import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-germany');
}

export default function LowExpForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-germany" />;
}
