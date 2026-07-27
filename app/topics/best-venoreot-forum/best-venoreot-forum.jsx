import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-forum');
}

export default function BestVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-forum" />;
}
