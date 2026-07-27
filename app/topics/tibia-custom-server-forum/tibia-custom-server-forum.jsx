import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-forum');
}

export default function TibiaCustomServerForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-forum" />;
}
