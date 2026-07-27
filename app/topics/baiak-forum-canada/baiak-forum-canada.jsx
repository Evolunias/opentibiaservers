import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-forum-canada');
}

export default function BaiakForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-forum-canada" />;
}
