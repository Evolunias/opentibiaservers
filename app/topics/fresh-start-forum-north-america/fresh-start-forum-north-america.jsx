import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-forum-north-america');
}

export default function FreshStartForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-forum-north-america" />;
}
