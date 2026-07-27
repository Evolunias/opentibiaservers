import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-forum');
}

export default function CurrentVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-forum" />;
}
