import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-sweden');
}

export default function BaiakForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-sweden" />;
}
