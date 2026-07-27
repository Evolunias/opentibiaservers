import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-forum');
}

export default function HighrateRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-forum" />;
}
