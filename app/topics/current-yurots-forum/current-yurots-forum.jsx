import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-forum');
}

export default function CurrentYurotsForumKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-forum" />;
}
