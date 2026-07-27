import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-poland');
}

export default function BaiakForumPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-poland" />;
}
