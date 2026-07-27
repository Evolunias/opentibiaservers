import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-forum');
}

export default function PvpeServerForumKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-forum" />;
}
