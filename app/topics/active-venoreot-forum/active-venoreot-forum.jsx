import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-forum');
}

export default function ActiveVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-forum" />;
}
