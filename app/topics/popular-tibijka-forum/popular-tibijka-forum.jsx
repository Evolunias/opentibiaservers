import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-forum');
}

export default function PopularTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-forum" />;
}
