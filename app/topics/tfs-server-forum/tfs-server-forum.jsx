import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-forum');
}

export default function TfsServerForumKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-forum" />;
}
