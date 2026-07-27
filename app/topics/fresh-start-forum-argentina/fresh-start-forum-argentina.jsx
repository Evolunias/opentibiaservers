import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-argentina');
}

export default function FreshStartForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-argentina" />;
}
