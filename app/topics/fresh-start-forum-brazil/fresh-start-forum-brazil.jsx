import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-brazil');
}

export default function FreshStartForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-brazil" />;
}
