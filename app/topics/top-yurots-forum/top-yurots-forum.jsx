import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-forum');
}

export default function TopYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-forum" />;
}
