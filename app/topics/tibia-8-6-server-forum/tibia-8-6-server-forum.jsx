import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-forum');
}

export default function Tibia86ServerForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-forum" />;
}
