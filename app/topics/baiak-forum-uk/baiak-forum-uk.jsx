import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-uk');
}

export default function BaiakForumUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-uk" />;
}
