import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-forum');
}

export default function PopularRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-forum" />;
}
