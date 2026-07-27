import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-forum');
}

export default function RealMapDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-forum" />;
}
