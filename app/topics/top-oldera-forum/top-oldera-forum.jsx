import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-forum');
}

export default function TopOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-forum" />;
}
