import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-forum');
}

export default function BestCanobForumKeywordPage() {
  return <StaticKeywordPage slug="best-canob-forum" />;
}
