import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-forum');
}

export default function FreshStartVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-forum" />;
}
