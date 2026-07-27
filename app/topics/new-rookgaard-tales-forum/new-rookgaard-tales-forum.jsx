import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-forum');
}

export default function NewRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-forum" />;
}
