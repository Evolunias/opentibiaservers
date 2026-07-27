import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-mexico');
}

export default function FreshStartForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-mexico" />;
}
