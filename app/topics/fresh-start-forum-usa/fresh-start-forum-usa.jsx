import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-usa');
}

export default function FreshStartForumUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-usa" />;
}
