import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-forum');
}

export default function TopCanobForumKeywordPage() {
  return <StaticKeywordPage slug="top-canob-forum" />;
}
