import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-forum');
}

export default function CurrentCanobForumKeywordPage() {
  return <StaticKeywordPage slug="current-canob-forum" />;
}
