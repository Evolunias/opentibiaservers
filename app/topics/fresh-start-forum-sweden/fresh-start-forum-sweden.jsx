import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-sweden');
}

export default function FreshStartForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-sweden" />;
}
