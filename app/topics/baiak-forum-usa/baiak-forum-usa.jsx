import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-usa');
}

export default function BaiakForumUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-usa" />;
}
