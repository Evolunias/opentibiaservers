import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-forum');
}

export default function NewSeasonVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-forum" />;
}
