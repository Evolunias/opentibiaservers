import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-forum');
}

export default function CurrentOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-forum" />;
}
