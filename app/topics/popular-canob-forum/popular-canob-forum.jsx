import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-forum');
}

export default function PopularCanobForumKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-forum" />;
}
