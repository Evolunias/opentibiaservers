import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-germany');
}

export default function BaiakForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-germany" />;
}
