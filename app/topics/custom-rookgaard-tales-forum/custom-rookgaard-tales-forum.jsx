import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-forum');
}

export default function CustomRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-forum" />;
}
