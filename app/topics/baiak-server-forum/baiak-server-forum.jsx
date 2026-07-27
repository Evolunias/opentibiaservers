import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-forum');
}

export default function BaiakServerForumKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-forum" />;
}
