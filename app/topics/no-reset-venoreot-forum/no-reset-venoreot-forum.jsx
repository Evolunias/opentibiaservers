import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-forum');
}

export default function NoResetVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-forum" />;
}
