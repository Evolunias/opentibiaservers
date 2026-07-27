import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-forum');
}

export default function PopularOlderaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-forum" />;
}
