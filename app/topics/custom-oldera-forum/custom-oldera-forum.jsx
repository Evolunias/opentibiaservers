import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-forum');
}

export default function CustomOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-forum" />;
}
