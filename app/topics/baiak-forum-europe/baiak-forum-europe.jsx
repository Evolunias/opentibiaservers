import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-europe');
}

export default function BaiakForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-europe" />;
}
