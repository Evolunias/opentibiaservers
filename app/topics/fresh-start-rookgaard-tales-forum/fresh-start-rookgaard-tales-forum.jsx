import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-forum');
}

export default function FreshStartRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-forum" />;
}
