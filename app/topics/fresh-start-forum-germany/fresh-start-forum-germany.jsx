import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-germany');
}

export default function FreshStartForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-germany" />;
}
