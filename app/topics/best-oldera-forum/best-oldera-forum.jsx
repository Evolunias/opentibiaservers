import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-forum');
}

export default function BestOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-forum" />;
}
