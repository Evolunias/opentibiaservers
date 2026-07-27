import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-forum-brazil');
}

export default function HighExpForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-forum-brazil" />;
}
