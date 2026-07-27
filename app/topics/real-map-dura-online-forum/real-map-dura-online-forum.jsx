import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-forum');
}

export default function RealMapDuraOnlineForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-forum" />;
}
