import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-latin-america');
}

export default function FreshStartForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-latin-america" />;
}
