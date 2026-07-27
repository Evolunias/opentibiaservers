import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-forum');
}

export default function PopularYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-forum" />;
}
