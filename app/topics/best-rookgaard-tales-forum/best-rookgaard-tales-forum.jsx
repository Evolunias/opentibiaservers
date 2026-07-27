import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-forum');
}

export default function BestRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-forum" />;
}
