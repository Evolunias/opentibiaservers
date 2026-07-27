import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-argentina');
}

export default function BaiakForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-argentina" />;
}
