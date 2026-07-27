import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-forum');
}

export default function LowrateVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-forum" />;
}
