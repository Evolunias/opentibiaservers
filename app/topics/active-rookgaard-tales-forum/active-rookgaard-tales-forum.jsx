import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-forum');
}

export default function ActiveRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-forum" />;
}
