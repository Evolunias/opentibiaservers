import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-forum');
}

export default function TopRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-forum" />;
}
