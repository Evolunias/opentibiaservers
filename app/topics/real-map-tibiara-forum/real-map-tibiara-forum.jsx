import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-forum');
}

export default function RealMapTibiaraForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-forum" />;
}
