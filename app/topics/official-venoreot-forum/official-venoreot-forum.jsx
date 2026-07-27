import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-forum');
}

export default function OfficialVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-forum" />;
}
