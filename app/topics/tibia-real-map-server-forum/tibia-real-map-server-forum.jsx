import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-forum');
}

export default function TibiaRealMapServerForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-forum" />;
}
