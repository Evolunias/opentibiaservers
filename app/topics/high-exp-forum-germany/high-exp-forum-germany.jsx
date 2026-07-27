import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-germany');
}

export default function HighExpForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-germany" />;
}
