import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-forum');
}

export default function CustomVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-forum" />;
}
