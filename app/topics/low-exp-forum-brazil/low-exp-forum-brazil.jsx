import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-forum-brazil');
}

export default function LowExpForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-forum-brazil" />;
}
