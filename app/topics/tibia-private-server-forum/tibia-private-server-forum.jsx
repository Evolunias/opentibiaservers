import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-forum');
}

export default function TibiaPrivateServerForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-forum" />;
}
