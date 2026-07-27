import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-forum');
}

export default function RookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-forum" />;
}
