import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-forum');
}

export default function NewVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-forum" />;
}
