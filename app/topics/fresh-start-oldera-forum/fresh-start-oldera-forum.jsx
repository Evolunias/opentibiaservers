import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-forum');
}

export default function FreshStartOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-forum" />;
}
