import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-forum');
}

export default function OfficialRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-forum" />;
}
