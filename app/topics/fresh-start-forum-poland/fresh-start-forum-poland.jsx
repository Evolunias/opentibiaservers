import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-poland');
}

export default function FreshStartForumPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-poland" />;
}
