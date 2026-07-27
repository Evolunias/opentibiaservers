import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-forum');
}

export default function OldSchoolVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-forum" />;
}
