import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-forum');
}

export default function HighrateVenoreotForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-forum" />;
}
