import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-forum');
}

export default function NewSeasonRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-forum" />;
}
