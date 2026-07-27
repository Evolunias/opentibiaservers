import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-brazil');
}

export default function BaiakForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-brazil" />;
}
