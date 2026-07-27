import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-forum');
}

export default function FreshStartCanobForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-forum" />;
}
