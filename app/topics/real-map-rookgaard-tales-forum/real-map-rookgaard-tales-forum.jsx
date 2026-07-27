import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-forum');
}

export default function RealMapRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-forum" />;
}
