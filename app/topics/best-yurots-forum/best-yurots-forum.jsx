import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-forum');
}

export default function BestYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-forum" />;
}
