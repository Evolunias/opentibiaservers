import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots-forum');
}

export default function FreshStartYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots-forum" />;
}
