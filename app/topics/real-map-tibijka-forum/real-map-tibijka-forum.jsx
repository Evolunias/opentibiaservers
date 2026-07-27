import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-forum');
}

export default function RealMapTibijkaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-forum" />;
}
