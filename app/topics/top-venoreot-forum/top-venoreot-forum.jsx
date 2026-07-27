import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-forum');
}

export default function TopVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-forum" />;
}
