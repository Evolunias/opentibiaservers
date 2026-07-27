import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-forum');
}

export default function PopularVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-forum" />;
}
